const Koa = require('koa');
const router = require('koa-router')();
const staticResource = require('koa-static');
const path = require('path')
const app = new Koa();
app.use(staticResource(path.join(__dirname,'public')))
app.use(router.routes());
app.listen(3000);
console.log('服务器创建成功，启动的端口是3000');