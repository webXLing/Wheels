const express = require('express');
const common = require('./../libs/common');
const config = require('../config');
const fs = require('fs');
let router = express.Router();

//管理员分为 超级管理员 与普通管理员
//超级管理员直接写在文件中

//每个页面都要去验证是否登录（除了登录页面） 
// 如果session 里面没有admin_ID 就去跳转登录页面
router.use((req,res,next)=>{
  if(!req.session['admin_ID'] && req.url!='/login'){
    res.redirect('/admin/login')//默认状态码302
  }else{
    next()
  }
})

router.get('/login',(req,res)=>{
  res.render('login',{err_msg:''})
})

router.post('/login',(req,res)=>{
  let {username,password} = req.body;
  if(username == config.super_user){
    // 超级管理员
    console.log('超级管理员')
    if(common.md5(password) == config.super_pass){
      console.log('超级管理员登录成功')
      req.session['admin_ID'] = 1;
      res.redirect('/admin');
    }else{
      console.log('超级管理员密码错误')
      show_err('超级管理员密码错误')
    }

  }else{
    // 普通管理员 或者账号不存在
    console.log('普通管理员 或者账号不存在')
    req.db.query(`SELECT * FROM admin_table WHERE username='${username}'`,(err,data)=>{
      if(err){
        show_err('服务器出错了')
      }else{
        console.log(data)
        if(data.length==0){
          show_err('管理员账号不存在')
        }else if(data.length>0 && data[0].password == common.md5(password)){
          req.session['admin_ID'] =data[0].ID
          res.redirect('/admin');
          console.log('普通管理员登录成功')
        }else{
          show_err('普通管理员账号密码错误')
        }
      }

      
    })

  }

  function show_err (str){
    res.render('login',{err_msg:str})
  }
})

// 这里就是的已经登录了
router.get('/',(req,res)=>{
  res.redirect('/admin/house')
})


// 获取数据

router.get('/house',(req,res)=>{
  // 分页 SELECT xxx FROM 表 WNERE 条件 LIMIT 起点数量
  // SELECT COUNT(*) AS C FROM house_table 列名 C

  const pagesize = 2;//每页一条

  let page = req.query.page;
  // console.log(req.query)
  // console.log(page)
  // console.log(/^[1-9]\d*$/.test(page))

  if(!page){
    page = 1;
  }else if(!/^[1-9]\d*$/.test(page)){//1-9开头 任意个数字结尾
    page = 1;
  }

  const start = (page-1)*pagesize;
  // console.log(start)

  // 模糊搜索
  let search = true;
  if(req.query.keyword){
    // % 在sql中就是通配符
    search = req.query.keyword.split(/\s*/).filter(item=>item).map(item=>`title LIKE '%${item}%'`).join(' OR ');
    console.log(search)
    console.log(`SELECT * FROM house_table WHERE ${search} LIMIT ${start},${pagesize}`)
  }

  req.db.query(`SELECT * FROM house_table WHERE ${search} ORDER BY ave_price DESC LIMIT ${start},${pagesize}`,(err,data)=>{
    // DESC 降序  默认升序
    // console.log(data)
    if(err){
      res.sendStatus(500)
    }else{

      // 在获取数据总数量
      req.db.query(`SELECT COUNT(*) AS c FROM house_table WHERE ${search}`,(c_err,c_data)=>{
        if(c_err){
          res.sendStatus(500)
        }else if(c_data.length){
          res.render('index',{
            data,
            page_count:Math.ceil(c_data[0].c/pagesize),
            curent_page:page,
            keyword:req.query.keyword
          })
        }else{
          res.sendStatus(500)
        }
      })
    }
  })
})


// 添加数据  修改
router.post('/house',(req,res)=>{
  console.log(req.body);
  console.log(req.files);
  // 处理新增房屋的数据
    // 1.将时间转化为秒
    req.body['sale_time'] =Math.floor(new Date(req.body['sale_time']+' 00:00:00').getTime()/1000);
    req.body['submit_time'] = Math.floor(new Date(req.body['submit_time']+' 00:00:00').getTime()/1000);
  if(req.body.is_modf=='1'){//修改
    console.log('修改')
    let fields = ['title','sub_title','position_main','position_second','ave_price','area_min','area_max','tel','sale_time','submit_time','building_type','property_types'];
    
    let arr = [];
    fields.forEach(key=>{
      arr.push(`${key}='${req.body[key]}'`)
    })
    console.log(`UPDATE house_table SET ${arr.join(',')} WHERE ID='${req.body.old_id}'`)
    req.db.query(`UPDATE house_table SET ${arr.join(',')} WHERE ID='${req.body.old_id}'`,(err)=>{
      if(err){
        console.log(err)
        res.sendStatus(500)
      }else{
        res.redirect('/admin/house')
      }
    })
  }else{
    console.log('新增')
    // 图片
    let simgArr = [];//小图
    let srimgArr = [];//小图 真实地址

    for(let i in req.files){
      switch(req.files[i].fieldname){
        case 'main_img':
        req.body['main_img_path'] = req.files[i].filename+'.jpg';
        req.body['main_img_real_path'] = req.files[i].path.replace(/\\/g, '\\\\');;
        break;

        case 'img':
        // console.log('这里')
        // console.log(i)
        console.log(req.files[i].filename)
        simgArr.push(req.files[i].filename+'.jpg')
        srimgArr.push(req.files[i].path)
        break;

        case 'property_img':
        req.body['property_imgs_paths'] = req.files[i].filename+'.jpg';
        req.body['property_img_real_paths'] = req.files[i].path.replace(/\\/g, '\\\\');
        break;
      }
    }

    req.body.ID = common.uuid();
    req.body.admin_ID = req.session.admin_ID;

    req.body['img_paths'] = simgArr.join(',');
    req.body['img_real_paths'] = srimgArr.join(',');

    // console.log(req.body)

    // 将数据插入数据库
    let keyArr = [];
    let valyArr = [];

    for(let key in req.body){
      if(key=='is_modf' || key=='old_id') continue;
      keyArr.push(key)
      valyArr.push(req.body[key])
    }

    // let sql = `INSERT INTO house_table (${keyArr.join(',')}) VALUES(${valyArr.join(',')})`;
    let sql = `INSERT INTO house_table (${keyArr.join(',')}) VALUES('${valyArr.join("','")}')`;
    // console.log('sql-->',sql)

    req.db.query(sql,(err,data)=>{
      if(err){
        console.log(err)
        res.sendStatus(500);
      }else{
        res.redirect('/admin/house')
      }
    })    
  }


})

// 删除数据
router.get('/house/delete',(req,res)=>{
  // console.log( req.query)
  let id = req.query.id;
  // 1.先删除图片
  req.db.query(`SELECT * FROM house_table WHERE ID='${id}'`,(err,data)=>{
    if(err){
      console.log(err)
      res.sendStatus(500);
    }else if(data.length==0){
      // res.sendStatus(404);
      res.showErr(404);
    }else{
      let dataArr = [];
      dataArr.push(data[0].main_img_real_path);
      dataArr.push(...data[0].img_real_paths.split(','));
      dataArr.push(...data[0].property_img_real_paths.split(','));
      // main_img_real_path
      // img_real_paths
      // property_img_real_paths
      // console.log(dataArr)
      
      let i = 0;
      next(i)
      function next (i){
        // console.log(dataArr[i])
        fs.unlink(dataArr[i],err=>{
          if(err){
            console.log(err)
            res.sendStatus(500);
          }else{
            i++;
            if(i>=dataArr.length){
              // 2.再删除数据(图片删除完成了)
              req.db.query(`DELETE FROM house_table WHERE ID='${id}'`,(err,data)=>{
                if(err){
                  res.sendStatus(500);
                }else{
                  res.redirect('/admin/house')
                }
              })
            }else{
              next(i);
            }
          }

        })
      }
    }
  })

  // 2.再删除数据
})


// 获取编辑数据
router.get('/house/getdata',(req,res)=>{

  // 校验数据
  let id = req.query.id
  // console.log(req.query)

  if(!id || !/^[\da-f]{32}$/.test(id)){
    // console.log(1)
    // res.sendStatus(404)
    res.showErr(404);

  }else{
    console.log(3)
    console.log(`SELECT * FROM house_table WHERE ID='${id}'`)
    req.db.query(`SELECT * FROM house_table WHERE ID='${id}'`,(err,data)=>{
      if(err){
        res.sendStatus(500);
      }else if(data.length==0){
        // res.sendStatus(404)
        res.showErr(404);
      }else{
        res.send(data[0])
      }
    })
  }
})



module.exports = router;
