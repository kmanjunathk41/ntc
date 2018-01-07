<template>
  <v-app light ref="vAppRef">
    <v-toolbar color="primary" fixed app>
      <v-toolbar-title class="white--text" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-content>
          <nuxt />
      </v-content>
      <v-notification ref="notificationRef"></v-notification>
    </main>
    <!--<v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>-->
  </v-app>
</template>

<script>
    export default {
        name:"layout",
        data () {
            return {
              title : "HEADER"
            }
        },
        mounted(){
            let appVueInstance = require("~/app/api/app_vue_instance");
            appVueInstance.initVueInstance(this);
        },
        methods : {

        }
    }
</script>
