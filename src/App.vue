<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/Login">登录</router-link> |-->
      <!--<router-link to="/Register">注册</router-link> |-->

    <!--</div>-->
    <router-view/>
  </div>
</template>
<script>
    import Vue from 'vue'
    import {setCookie, getCookie, delCookie} from "./assets/login/cookie";
    export default {
        name: "App",
        beforeMount () {
            Vue.prototype.$cookieStore = {
                setCookie,
                getCookie,
                delCookie
            }
        }
    }
</script>
<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

/*#nav {*/
  /*padding: 30px;*/
/*}*/

/*#nav a {*/
  /*font-weight: bold;*/
  /*color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
  /*color: #42b983;*/
/*}*/
</style>
