<template>
  <v-snackbar
          :timeout="timeout"
          :top="top"
          :right="right"
          v-model="snackbar"
          :color="color">
    {{ msg }}
    <v-btn flat color="white" @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>
<script>
    export default {
        data(){
            return{
                timeout: 5000,
                top: true,
                right: true,
                snackbar : false,
                color : '',
                msg : ''
            }
        }
    }
</script>
<style>

</style>

