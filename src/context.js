/**
 * @file context对象原型
 */

module.exports = {

    get query() {
        return this.request.query;
    },

    get body() {
        return this.response.body;
    },

    set body(data) {
        this.response.body = data;
    },

    get status() {
        return this.response.status;
    },

    set status(statusCode) {
        this.response.status = statusCode;
    }

};