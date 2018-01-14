require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initMongoose__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = connectMongoose;
var mongoose = __webpack_require__(7);


function connectMongoose() {
    var options = {
        useMongoClient: true,
        autoIndex: false, // Don't build indexes
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10 // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        // bufferMaxEntries: 0
    };
    mongoose.connect('mongodb://AdminManju:Mongo!123!@localhost:27017/admin', options).then(function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__initMongoose__["a" /* initMongoose */])(mongoose);
        console.log("mongo connected");
    }, function (err) {
        console.log("mongo connection failed");
    });
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return router; });
var Router = __webpack_require__(6);
var routeObj = new Router();

routeObj.get('/user/login', function (ctx, next) {
    ctx.body = { login: 'login available' };
});

var router = routeObj;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var nodeExternals = __webpack_require__(9);
var resolve = function resolve(dir) {
  return __webpack_require__(8).join(__dirname, dir);
};

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'NTC',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'dashboard' }],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/appRouter', '~/plugins/notification_plugin', { src: '~/plugins/responseManager', ssr: false }],
  css: ['~/assets/style/app.styl'],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#7a1ac9' },
  /*
   ** Build configuration
   */

  build: {

    vendor: ['~/plugins/vuetify.js', 'axios', '~/plugins/responseManager', '~/plugins/appRouter', '~/plugins/notification_plugin'],
    extractCSS: true,
    ssr: true,
    autoprefixer: false,
    /*
     ** Run ESLint on save
     */
    extend: function extend(config, ctx) {
      if (ctx.isDev && ctx.client) {
        config.module.rules.push(
        /* {
         test: /\.(js|vue)$/,
         loader: 'eslint-loader',
         exclude: /(node_modules)/
         }, */{
          test: /\.(css||less)$/,
          use: ['css-loader', 'less-loader']
        });
      }
      if (ctx.server) {
        config.externals = [nodeExternals({
          whitelist: [/^vuetify/]
        })];
      }
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = initMongoose;
/* unused harmony export getMongoose */
var this_mongoose = void 0;

function initMongoose(mongoose) {
    this_mongoose = mongoose;
}

function getMongoose() {
    return this_mongoose;
}

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodeserver_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nodeserver_routeHandler__ = __webpack_require__(1);




var app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 7616;
// process.env.DEBUG = 'nuxt:*'

// Import and Set Nuxt.js options
var config = __webpack_require__(2);
config.dev = !(app.env === 'production');

// Instantiate nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

//connect mongoose
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nodeserver_mongoose__["a" /* connectMongoose */])();
app.use(__WEBPACK_IMPORTED_MODULE_3__nodeserver_routeHandler__["a" /* router */].routes()).use(__WEBPACK_IMPORTED_MODULE_3__nodeserver_routeHandler__["a" /* router */].allowedMethods());

if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build().catch(function (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}

app.use(function (ctx) {
  ctx.status = 200;

  return new Promise(function (resolve, reject) {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, function (promise) {
      promise.then(resolve).catch(reject);
    });
  });
});

app.listen(port);
console.log('Server listening on ' + host + ':' + port);

/***/ }
/******/ ]);
//# sourceMappingURL=main.map