/**
 * @file demo
 */

let SimpleKoa = require('./src/application');

let app = new SimpleKoa();

// app.use(async ctx => {
//     ctx.body = 'hello world';
// });

app.context.echoData = function (errno = 0, data = null, errmsg = '') {
    this.res.setHeader('Content-Type', 'application/json;charset=utf-8');
    this.body = {
        errno: errno,
        data: data,
        errmsg: errmsg
    };
}

let responseData = {};

app.use(async (ctx, next) => {
    try {
        await next();
    }
    catch (err) {
        ctx.echoData(1001, '', '内部错误');
    }
});

app.use(async (ctx, next) => {
    responseData.name = 'tom';
    await next();
    ctx.echoData(0, responseData);
});

app.use(async (ctx, next) => {
    responseData.age = 16;
    await next();
});

app.use(async ctx => {
    responseData.sex = '男性';
    throw new Error('oooops!');
});

app.on('error', err => {
    console.log('error happends');
});

app.listen(3000, () => {
    console.log('listenning on 3000');
});