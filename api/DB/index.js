const Router = require('koa-router');

const DB = new Router();

DB.get('/db', (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path;
});

module.exports = DB;