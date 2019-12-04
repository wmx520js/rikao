const Mock  = require('mockjs');
const arr = [];
for (let i = 0;i<10;i++){
   arr.push({
     img:Mock.Random.image('100x100',Mock.Random.color()), 
     name:Mock.Random.cname(),
     title:Mock.Random.ctitle(),
    time:"5:00",
   })
}
module.exports={
  arr
}