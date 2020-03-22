// buffter创建
const buffter1 = Buffer.from('yishu')
const buffter2 = Buffer.alloc(20)
// console.log(buffter1)
// console.log(buffter2)


// buffter读写

buffter2.writeInt8(12,1)
// console.log(buffter2)

// 不同的字段塞在二进制流的不同位置，编码二进制包的时候 分三段写入

// 太麻烦 所以我们借助库

// https://www.npmjs.com/package/protocol-buffers

// 生成encode函数
// 自动编码成一个buffter


const fs = require('fs');
var protobuf = require('protocol-buffers')

// pass a proto file as a buffer/string or pass a parsed protobuf-schema object
var messages = protobuf(fs.readFileSync(__dirname + '/test.proto','utf-8'))
var buf = messages.Test.encode({
  id: 42,
  payload: 'hello world'
})

console.log(buf) // should print a buffer
{/* <Buffer 08 2a 12 0b 68 65 6c 6c 6f 20 77 6f 72 6c 64> */}


console.log(messages.Test.decode(buf))
// { id: 42, payload: 'hello world' }