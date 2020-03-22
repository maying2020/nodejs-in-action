const net = require('net');

const socket  = new net.Socket({});

socket.connect({
    host:'127.0.0.1',
    port:6002
})

const LESSON_IDS = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
]


let buffer = Buffer.alloc(4);
let index = Math.floor(Math.random() * LESSON_IDS.length);
buffer.writeInt32BE(
    LESSON_IDS[index]
)

socket.write(buffer);

socket.on('data',function(buffer){
    console.log(buffer.toString())

    // 请求回来之后再次发送
    buffer = Buffer.alloc(4);
    index = Math.floor(Math.random() * LESSON_IDS.length)
    buffer.writeInt32BE(
        LESSON_IDS[index]
    )
    socket.write(buffer);
}) //半双工通信（并发请求时候可能出现错乱的情况）

