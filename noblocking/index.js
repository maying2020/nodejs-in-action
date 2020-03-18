const glob = require('glob');
 var result  = null;
 console.time('glob')

//  阻塞I/O
//  result = glob.sync(__dirname + '/**/*');
//  console.timeEnd('glob')
//  console.log('result',result)

// 非阻塞I/O
glob(__dirname + '/**/*',function(err,res){
  console.log('得到结果啦',res)
})
console.timeEnd('glob')
console.log('22',11+11)