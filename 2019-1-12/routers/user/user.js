let {router} = require('./../../libs/router.js');
let user = {}
// /login?user=xx&&pass=xx
router.on('/login',(req,res)=>{
  console.log(req.query)
  let username = req.query['user'];

  let password = req.query['pass'];
  if(user[username] != password){
    console.log('用户')
    res.send({code:0,msg:'用户名密码错误'})
  }else{
    console.log('用户2')
    res.send({code:1,msg:'deng lu cheng gong'})
  }

  res.end();
})

router.on('/reg',(req,res)=>{
  let username = req.query['user'];
  let password = req.query['pass'];
  if(user[username]){
    res.send({code:0,msg:'用户名已存在'})
  }else{
    res.send({code:1,msg:'zhu ce cheng gong'})
    user[username] = password
  }
  console.log('reg')

  res.end();
})