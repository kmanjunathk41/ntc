var Router = require('koa-router');
var router = new Router();

router.get('/login', (ctx, next) => {
    ctx.body = {login:'login available'};
});


module.exports = router;