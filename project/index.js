const Koa = require('koa');
const static = require('koa-static');
const mount = require('koa-mount');
const fs = require('fs');


const app = new Koa();

app.use(static(__dirname + '/source'));
app.use(
    mount('/',(ctx)=>{
        console.log('ctx',ctx)
        ctx.body = fs.readFileSync(__dirname + '/source/index.htm','utf-8')
    })
)
app.listen(6003)