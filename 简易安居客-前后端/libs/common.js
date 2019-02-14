
const crypto = require('crypto');
const uuid = require('uuid/v4');

module.exports={
  md5(str){
    let md5 = crypto.createHash('md5').update(str).digest('hex');//16进制
    return md5
  },
  uuid(){
    return uuid().split('-').join('')
  }
}