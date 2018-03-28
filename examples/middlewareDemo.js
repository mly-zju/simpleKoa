/**
 * @file 中间件demo
 */

let SimpleKoa = require('../src/application');

let app = new SimpleKoa();

let responseData = {};

app.use(async (ctx, next) => {
    responseData.name = 'tom';
    await next();
    ctx.body = responseData;
});

app.use(async (ctx, next) => {
    responseData.age = 16;
    await next();
});

app.use(async (ctx, next) => {
    responseData.sex = 'male';
    await next();
});

app.listen(3000, () => {
    console.log('listenning on 3000');
});