/**
 * @file ctx扩展demo
 */

let SimpleKoa = require('../src/application');

let app = new SimpleKoa();

// 定义一个扩展方法
app.context.echoData = function (errno = 0, data = null, errmsg = '') {
    this.res.setHeader('Content-Type', 'application/json;charset=utf-8');
    this.body = {
        errno: errno,
        data: data,
        errmsg: errmsg
    };
};

app.use(async ctx => {
    if (ctx.query.name !== undefined) {
        let data = 'hello ' + ctx.query.name;
        ctx.echoData(0, data, '成功');
    }
    else {
        ctx.echoData(1001, '', '参数缺失');
    }
});

app.listen(3000, () => {
    console.log('listenning on 3000');
});