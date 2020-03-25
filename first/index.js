// console.log('hello world!')
// console.log(Date)
// console.log(Math)
// console.log(setInterval)
// console.log(setTimeout)
// console.log(requestAnimationFrame) //nodejs不存在
// console.log(setImmediate)

// console.log('__filename',__filename) //当前所运行的脚本的位置
// console.log('__dirname',__dirname) //当前所运行的脚本的目录位置
// console.log('process',process) //记载了运行nodejs的进程信息

// 剪刀石头布游戏🎮
var playerAction = process.argv[process.argv.length - 1];
console.log("playerAction", playerAction);

var random1 = Math.random() * 3;

if (random1 < 1) {
  var computerAction = "rock";
} else if (random1 > 2) {
  var computerAction = "scissor";
} else {
  var computerAction = "paper";
}
 
if (computerAction === playerAction) {
  console.log("平局");
} else if (
  (computerAction === "rock" && playerAction === "paper") ||
  (computerAction === "scissor" && playerAction === "rock") ||
  (computerAction === "paper" && playerAction === "scissor")
) {
  console.log("你赢了！");
} else {
  console.log("你输了！");
}
