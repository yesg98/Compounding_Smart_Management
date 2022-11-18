require('dotenv').config();

const Koa =require('koa');
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 4000;
console.log(process.env.PORT);
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// mongodb 연결
mongoose.connect(process.env.MONGO_URI, {
  //useMongoClient: true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

app.use(bodyParser()); // have to be upward of router
const DB = require('./DB');

router.use('/api/DB', DB.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('comp server is listening to port ' + port);
});