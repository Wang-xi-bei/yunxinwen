import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Home from '../components/Home/home.vue';
import NewList from '../components/Home/newlist.vue';
import Entertainment from '../components/Home/entertainment.vue';
import Sports from '../components/Home/sports.vue';
import Finance from '../components/Home/finance.vue';
import Logon from '../components/Logon/logon.vue';
import Details from "../components/Details/details.vue";
import My from "../components/My/my.vue";
import Login from "../components/Login/login.vue";

let routes=[{
  path:'/home',
  component:Home,
  children:[{
  path:'newlist',
  component:NewList
  },{
  path:'entertainment',
  component:Entertainment
  },{
  path:'sports',
  component:Sports
  },{
  path:'finance',
  component:Finance
  },
  {
    path:'',
    redirect:'/home/newlist'
  }
  ]},
  {
  name:'logon',
  path:'/logon',
  component:Logon
  },
  {
    name:'login',
    path:'/login',
    component:Login
  },
  {
    name:'my',
    path:'/my',
    component:My
  },
  {
  name:'details',
  path:'/details/:_id',
  component:Details
  },
  {
  path:'/',
  redirect:'/home/newlist'//默认首页
  }]
  let router = new VueRouter({
  routes,
  mode:'history'
})
export default router;