// 双工通信 ：解决半双工通信的问题

const net = require('net');
const socket  = new net.Socket({});
let seq =  0;
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


let index = Math.floor(Math.random() * LESSON_IDS.length);


socket.on('data',(buffer)=>{
    const seqBuffer = buffer.slice(0,2);
    const titleBuffer = buffer.slice(2);

    console.log(seqBuffer.readInt16BE(),titleBuffer.toString())
    // 请求回来之后再次发送
    index = Math.floor(Math.random() * LESSON_IDS.length);
    socket.write(encode(index));
})




function encode(index){
    buffer = Buffer.alloc(6);
    buffer.writeInt16BE(seq)
    buffer.writeInt32BE(
        LESSON_IDS[index],2
    )
    console.log('发包',seq,LESSON_IDS[index])
    seq++;
    return buffer;
}


// setInterval(() => {
//     index = Math.floor(Math.random() * LESSON_IDS.length);
//     socket.write(encode(index));
// }, 50);


for(let k = 0;k< 100; k++){
    index = Math.floor(Math.random() * LESSON_IDS.length);
    socket.write(encode(index));
}

