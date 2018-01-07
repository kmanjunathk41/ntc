(function () {
  // const responseHandler = require("../../app/api/responseHandler");
  const loginConfig = require('../../app/api/api_configs/api_configs_new/login');
  let axios = require('axios');
  const loginComp = {
    name: 'loginView',

    data: function () {
      return {
        msg: 'Hello there, please login',
        userName: '',
        password: '',
        passwordType: 'password',
        passwordToggle: false,
        rules: {
          requiredUsername: value =>
            !!value || 'username is required and cannot be empty.',
          requiredPassword: value =>
            !!value || 'password is required and cannot be empty.'
        }
      };
    },

    created: function () {
      // this.checkUser();
    },

    mounted: function () {
      this.checkUser();
    },
    methods: {
      checkUser: function () {
        let un = localStorage.getItem('username');
        let pswd = localStorage.getItem('password');
        this.userName = un || '';
        this.password = pswd || '';
      },
      loginFormSubmit: function (event) {
        console.log("hello\n");
        if (!this.userName) {
          this.$refs.userNameRef.validate(true);
          return;
        }
        if (!this.password) {
          this.$refs.passwordRef.validate(true);
          return;
        }

        let resHandler = new this.$responseManager();
        loginConfig.data.userName = this.userName;
        loginConfig.data.password = this.password;
        loginConfig.successCallback = this.loginSuccessCallback.bind(this);
        loginConfig.errorCallback = this.loginErrorCallback.bind(this);
        resHandler.execute(loginConfig);
      },
      loginSuccessCallback: function () {
        localStorage.setItem('username', this.userName);
        localStorage.setItem('password', this.password);
        this.$emit('loginSuccessEvent', this.$store.state.loginStore.userInfo);
      },
      loginErrorCallback: function () {
        console.log('error login');
      }
    }
  };
  module.exports = loginComp;
})();
