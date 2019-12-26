import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies'
import VueCropper from 'vue-cropper'
import CryptoJS from 'crypto-js';
import {setCookie, getCookie, delCookie} from "./assets/login/cookie";


Vue.config.productionTip = false
Vue.prototype.$cookieStore = {
    setCookie,
    getCookie,
    delCookie
}
Vue.prototype.CryptoJS = CryptoJS;
Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(VueCropper)
Vue.use(VueCookies)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
