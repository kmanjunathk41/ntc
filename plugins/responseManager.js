/* import Vue from 'vue';
let rh = require("~/app/api/responseHandler");
Vue.prototype.$responseHandler = rh; */
export default function (ctx, inject) {
  console.log(ctx);
  let rh = require('~/app/api/responseManager');
  inject('responseManager', rh);
}
