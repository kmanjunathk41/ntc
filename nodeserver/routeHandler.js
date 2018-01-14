var Router = require('koa-router');
var routeObj = new Router();

/*routeObj.get('/userLogin', (ctx, next) => {
    console.log("user login route")
    ctx.status = 200;
    ctx.body = {login:'login available'};
});*/

routeObj.get('/userLogin', function (ctx, next) {
    console.log("user login route")
    ctx.status = 200;
    ctx.body = {login:'login available'};
});

export let router = routeObj;