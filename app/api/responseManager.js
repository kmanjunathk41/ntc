(function () {
  let appVueInstance = require('./app_vue_instance');
  let apiUrlObj = require('./api_url');
  let responseMsgExtractor = require('./response_msg_extractor');
  let notification = require('../api/notification/notification');
  let responseHandler = require('./responseHandler');
  let responseManager = function () {};

  responseManager.prototype = {
    execute: function (config) {
      config.appVue = appVueInstance;
      config.apiUrlObj = apiUrlObj;
      config.responseMsgExtractor = responseMsgExtractor;
      config.notificationHandler = notification.getNotificationHandler();
      config.appState = appVueInstance.VueObj.$store;
      config.viewStorage = appVueInstance.VueObj.$store;
      let handler = new responseHandler(config);
      handler.execute();
    },
    temp: function () {
      appVueInstance.VueObj.$store.commit('setAppState', true);
    }
  };

  module.exports = responseManager;
})();
