const express = require('express');
const url = require('url');

let router = express.Router();


router.get('/',(req,res)=>{
  const pageSize = 2;
  let page = req.query.page;
  if(!page || page <1){
    page = 1;
  }
  let start = (page - 1)*pageSize;
  req.db.query(`SELECT main_img_path,ID,title,position_main,position_second,sub_title,ave_price,property_types,area_min,area_max FROM house_table LIMIT ${start},${pageSize}`,(err,data)=>{
    if(err){
      res.sendStatus(500);
    }else{
      req.db.query(`SELECT COUNT(*) AS c FROM house_table`,(c_err,c_data)=>{
        if(c_err){
          res.sendStatus(500);
        }else{
          res.render('list',{
            list_data:data,
            cur_page:page,
            page_count:Math.ceil(c_data[0].c/pageSize)
          })
        }
      })
    }
  })

})

router.get('/upload/:img_path',(req,res)=>{
  let {img_path} = req.params
  // console.log(req.headers);
  // console.log(req.headers['referer']);//哪个网页引用的
  let obj = url.parse(req.headers['referer'])
  // console.log(obj)
  // req.headers['referer']
  if(obj.host=='localhost:8080'){
    res.sendfile(`${req.rooturl}/upload/${img_path.split('.')[0]}`)
  }else{
    res.sendStatus(404)
  }
})

router.get('/detail/:id',(req,res)=>{
  let {id} = req.params;
  console.log(id)
  if(!id){
    res.showErr(404);
  }else{
    req.db.query(`SELECT * FROM house_table WHERE ID='${id}'`,(err,data)=>{
      if(err){
        res.showErr(404);
      }else{
        console.log(data[0])
        res.render('detail',{data:data[0]})
      }
    })
  }
})


module.exports = router;