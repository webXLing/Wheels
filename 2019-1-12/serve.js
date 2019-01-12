// 1.http 服务
// 2.接口  router
// 3.文件
// 4.流操作  流传输
// 5.压缩  压缩传输

const http = require('http');
const fs = require('fs');
const url = require('url');
const {router} = require('./libs/router.js');
const zlib = require('zlib');//压缩
const user = require('./routers/user')
console.log(router)

http.createServer((req,res)=>{
  let {pathname , query}=url.parse(req.url,true);

  //由于res.write() 入参必须是字符串或者 buffer
  res.send = function(data){
    if(!(data instanceof Buffer) && (typeof data !='string')){
      let str = JSON.stringify(data)
      res.write(str)
    }
  }

  req.query = query

  // 1.是不是接口
  if(false === router.emit(pathname,req,res)){
    //2.读取文件
    let rs = fs.createReadStream(`www${pathname}`);
    let gz = zlib.createGzip();
    res.setHeader('Content-Encoding','gzip')
    rs.pipe(gz).pipe(res);
    // rs.pipe(res);

    rs.on('error',function(){
      res.setHeader('Content-Encoding','identity')
      //identity  不进行编码  默认
      res.writeHead(404);
      res.write('not found!')
      console.log('读取文件失败')
      res.end()
    })
  }else{

  }



  // 3.其他
}).listen(8080);