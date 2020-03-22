// console.log('start require')
// let lib = require('./lib.js')
// lib跟lib导出的变量是同一个引用
// 引用的对象lib是挂在了module.exports上 而非exports上
// console.log('lib',lib)
// console.log('end  require')

// lib.addtion = 'test'



var playerAction = process.argv[process.argv.length - 1];

const game = require('./game.js')

// console.log('game',game)

// const result = game(playerAction);
// console.log('result',result)

let count = 0
// 将进程设置为长期存在并且监听用户的输入
// 获取进程的标准输入，将标准输入转化为字符串输出出来 
process.stdin.on('data',e=>{
  const playerAction = e.toString().trim();
  console.log('playerAction',playerAction)

  const result = game(playerAction);

  // 统计
  if(result == -1){
    count++;
  }
  if(count == 3){
    console.log('你太厉害了，我不玩了！！')
    process.exit();
  }
})