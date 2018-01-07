<template>
    <section class="container">
            <login v-on:loginSuccessEvent="loginSuccess"></login>
    </section>
</template>
<script>
    import Login from '~/components/Login.vue'
    export default {
        asyncData (context) {
            return { project: 'indexAsyncData' }
        },
        data () {
            return {
                name:"login"
            }
        },
        components: {
            Login
        },
        created : function () {

        },
        mounted() {
        },
        methods : {
            loginSuccess : function (data) {
                this.$store.commit("setAppState",true);
                this.$store.commit("setUserId",data.userId);
                 this.$router.push("/applianceList");
            }
        }
    }
</script>
<style>

</style>
