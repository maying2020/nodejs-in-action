// console.log('hello  geekbang')
// exports.hello="world"

// exports.add = ()=>{
//   return a  +  b
// }
// setTimeout(()=>{
//   console.log('export',exports)
// },2000)

// module.exports = function minus(a,b){
//   return a -b;
// }


exports.hello="world"


// 使用commonjs实现剪刀石头布游戏
module.exports = (playerAction)=>{
  // var playerAction = process.argv[process.argv.length - 1];
  
  var random1 = Math.random() * 3;
  
  if (random1 < 1) {
    var computerAction = "rock";
  } else if (random1 > 2) {
    var computerAction = "scissor";
  } else {
    var computerAction = "paper";
  }
  console.log('我出了',playerAction)
  if (computerAction === playerAction) {
    console.log("平局");
    return 0;
  } else if (
    (computerAction === "rock" && playerAction === "paper") ||
    (computerAction === "scissor" && playerAction === "rock") ||
    (computerAction === "paper" && playerAction === "scissor")
  ) {
    console.log("你赢了！");
    return -1;
  } else {
    console.log("你输了！");
    return 1;
  }
  }