const Router = require('koa-router');
const DB = new Router();
const comp = require('./compounding1');

DB.post('/post',comp.addData)
DB.post('/1', comp.findData);



module.exports = DB;