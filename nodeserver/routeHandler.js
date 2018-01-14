var Router = require('koa-router');
var routeObj = new Router();

routeObj.get('/user/login', (ctx, next) => {
    ctx.body = {login:'login available'};
});

export let router = routeObj;