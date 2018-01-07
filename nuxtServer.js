import Koa from 'koa';
import {Nuxt, Builder} from 'nuxt';
import {connectMongoose} from "./nodeserver/mongoose"
const app = new Koa();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 7616;
// process.env.DEBUG = 'nuxt:*'

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js');
config.dev = !(app.env === 'production');

// Instantiate nuxt.js
const nuxt = new Nuxt(config);

//connect mongoose
connectMongoose();


if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build().catch(e => {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}

app.use(ctx => {
  ctx.status = 200;

  return new Promise((resolve, reject) => {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, promise => {
      promise.then(resolve).catch(reject);
    });
  });
});

app.listen(port, host);
console.log('Server listening on ' + host + ':' + port);
