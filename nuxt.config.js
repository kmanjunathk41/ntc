const nodeExternals = require('webpack-node-externals');
const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
  /*
    ** Headers of the page
    */
  head: {
    title: 'klario',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'dashboard'}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon.png'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/appRouter',
      {src:'~/plugins/notification_plugin', ssr:true},
    {src: '~/plugins/responseManager', ssr: false}
  ],
  css: ['~/assets/style/app.styl'],
  /*
    ** Customize the progress bar color
    */
  loading: {color: '#7a1ac9'},
  mode : "spa",
  router : {
    mode : "hash"
  },


  generate : {
    routes: [
      '/login'
    ]

  },
  /*
    ** Build configuration
    */

  build: {
    babel: {
      plugins: [
        ["transform-imports", {
          "vuetify": {
            "transform": "vuetify/es5/components/${member}",
            "preventFullImport": true
          }
        }]
      ]
    },
    vendor: [
      '~/plugins/vuetify.js',
      'axios',
      '~/plugins/responseManager',
      '~/plugins/appRouter',
      '~/plugins/notification_plugin'
    ],
    extractCSS: true,
    ssr: true,
    autoprefixer: false,
    /*
         ** Run ESLint on save
         */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push(
          /* {
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
          }, */ {
            test: /\.(css||less)$/,
            use: ['css-loader', 'less-loader']
          }
        );
      }
    }
  }
};
