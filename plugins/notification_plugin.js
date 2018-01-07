import Vue from 'vue';
/*// import vNotification from "@cloudmpower/client-notification-component";
import { vNotification } from '@cloudmpower/client-notification-component'
// import vNotification from "../../dist/main";
// let vNotification = require("@cloudmpower/client-notification-component").default;
Vue.component('vNotification', vNotification);*/


/*import NotificationPlugin from '@cloudmpower/client-notification-component'

Vue.use(NotificationPlugin)*/



import vNotification from '~/components/notification.vue'
Vue.component('vNotification', vNotification);
