var Router = require('koa-router');
var routeObj = new Router();

routeObj.get('/userLogin', (ctx, next) => {
    console.log("user login route")
    ctx.body = {login:'login available'};
});

export let router = routeObj;