const express= require('express');
const mysql= require('mysql');
const bodyParser= require('body-parser');//处理json url编码的数据 通过res.body 就可以拿到数据
const multer= require('multer');//处理 enctype="multipart/form-data"的表单数据 文件上传
const cookieParser= require('cookie-parser');
const cookieSession= require('cookie-session');
const consolidate= require('consolidate');//模板引擎库



const config= require('./config');

let app = express();

// 搭建服务器
app.listen(config.port,(req,res)=>{
  // console.log('ceshi')
})

// 连接数据库
const db = mysql.createPool({
  host:config.mysql_host,
  user:config.mysql_user,
  password:config.mysql_password,
  database:config.mysql_database,
  port:config.mysql_port
})

// db.query("SELECT * FROM admin_table",(err,data)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log(data)
// })

app.use((req,res,next)=>{
  req.db = db;
  req.rooturl = __dirname;
  res.showErr = function(code){
    switch(code){
      case 404:
      res.status(404);
      res.render('404');
    }
  }
  next();
})

// 中间件
// 解析url数据 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//文件POST数据
let upload = multer({dest:'upload/'})
  // 接受一切上传的文件。文件数组将保存在 req.files
app.use(upload.any())

// cookie
app.use(cookieParser(require('./secret/cookie_key')))//req.cookies

// session
app.use(cookieSession({keys:require('./secret/session_key')}))//req.session

// 设置模板
app.set('html',consolidate.ejs);//通过ejs引擎渲染html文件
app.set('view engine','ejs');//设置默认的扩展名
app.set('views','./template');//设置模板文件的目录

// 路由
app.use('/admin',require('./routers/admin_router'))
app.use('/',require('./routers/www_router'))

// 静态
app.use(express.static('./www'))

app.use('/',(req,res)=>{
  res.showErr(404);
})


