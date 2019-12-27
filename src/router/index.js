import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Detail from '../views/Detail.vue'
import personal from '../views/personal'
import list from '../views/List'
import list2 from '../views/List2'
import aaa from '../views/aaa'
import bbb from '../views/bbb'
import state from '../views/state'
import credit from '../views/credit'
import imgupload from '../views/imgupload'
import reset from '../views/reset'

import question from '../views/question'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },


    {
        path:'/detail/:id',
        name:'detail',
        component:Detail
    },

    {
        path:'/personal',
        name:'personal',
        component:personal
    },
    {
        path:'/list',
        name:'list',
        component:list
    },
    {
        path:'/aaa',
        name:'aaa',
        component:aaa
    },
    {
        path:'/bbb',
        name:'bbb',
        component:bbb
    },
    {
        path:'/state',
        name:'state',
        component:state
    },

    {
        path:'/credit',
        name:'credit',
        component:credit
    },
    {
        path:'/list2',
        name:'list2',
        component:list2
    },
    {
        path:'/imgupload',
        name:'imgupload',
        component:imgupload
    },


    {
        path:'/reset',
        name:'reset',
        component:reset
    },

    {
        path:'/question',
        name:'question',
        component:question
    },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
