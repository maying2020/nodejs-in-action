const http = require('http')
const fs = require('fs')
http
.createServer((req,res)=>{
    // console.log('req',req.url) 
    // req /
    // req /favicon.ico 浏览器自动发出的

    if(req.url == '/favicon.ico'){
        res.writeHead(200);
        res.end();
        return;
    }
    res.writeHead(200);
    res.end('hello')
    // fs.createReadStream(__dirname + '/index.html')
    // .pipe(res)

})
.listen(8888)


// httpserver