/**
 * @file simpleKoa request对象原型
 */

let url = require('url');

module.exports = {

    get query() {
        return url.parse(this.req.url, true).query;
    }

};