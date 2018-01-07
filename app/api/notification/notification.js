(function () {
  let appViewInstance = require('../app_vue_instance');

  let AppNotification = function () {};

  AppNotification.prototype = {
    getNotificationHandler: function () {
      return this.showNotification.bind(this);
    },
    showNotification: function (msgObj, color) {
      let handler = appViewInstance.VueObj.$refs.notificationRef;
      handler.color = msgObj.notificationText;
      handler.msg = msgObj.notificationMessage;
      handler.snackbar = true;
    }
  };

  module.exports = (function () {
    return new AppNotification();
  })();
})();
