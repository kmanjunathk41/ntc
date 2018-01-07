(function () {
  module.exports = {
    method: 'post',
    apiUrl: 'login',
    data: {userName: String, password: String},
    options: {headers: {'content-type': 'application/json'}},

    successExecutionList: {
      change_state: false,
      navigation: false,
      callback: true,
      notification: true,
      store: true
    },
    errorExecutionList: {
      change_state: false,
      navigation: false,
      callback: true,
      notification: true,
      store: false
    },

    successNavigateTo: '',
    errorNavigateTo: '',

    successCallback: function () {},
    errorCallback: function () {},

    successNotificationMsg: 'Login Successful!',
    errorNotificationMsg: 'Login UnSuccessful!',

    storageReferenceName: 'loginStore',
    storageFunctionName: 'loginStore/setUserInfo',

    stateName: 'appState',
    successState: true,
    errorState: false
  };
})();
