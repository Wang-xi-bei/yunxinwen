import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//代表着所有组件 引入了,以为着所有的样式 都插入到style标签了
import Home from '../pages/home.vue'

// import Follow from '../pages/follow.vue'
// const Follow = ()=>import("../pages/follow.vue");
const Follow = ()=>import(/* webpackChunkName: "follow" */ "../pages/follow.vue");

// import Column from '../pages/column.vue'

import User from '../pages/user.vue'
// import Reg from '../pages/reg.vue'
import Login from '../pages/login.vue'
import Detail from '../pages/detail.vue'
import NoPage from '../pages/no-page.vue'
import ShopCar from '../pages/ShopCar.vue'

let routes=[
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:()=>import(/* webpackChunkName: "column" */'../pages/column.vue')},
  {path:'/user',component:User},
  {path:'/reg',component:(r)=>require(['../pages/reg.vue'],r)},
  {path:'/login',component:Login},
  {path:'/shopcart',component:ShopCar},
  {path:'/detail/:_id',component:Detail},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  mode:'history',
  routes
});

//全局守卫,携带token校验
import axios from './axios';

/* router.beforeEach((to,from,next)=>{
  console.log('beforeEach');
  if(/login|reg/.test(to.path)){
    next()
  }else{
    console.log('beforeEach axios读数据 ');
    axios({url:'/api/home'}).then(
      res=>{
        // console.log('beforeEach',res.data);
        res.data.err==0?next():next('/login')
      }
    )
  }

}) */

export default router;