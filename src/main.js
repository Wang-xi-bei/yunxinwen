import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入vue配置,store实例
import store from '../src/plugins/vuex'//全局引入Vuex
//引入公共css
import './common/style/base.css'
import './axios/axios'
import './config/url'

//vant Ui库引入配置
import { Field  } from "vant";
import { Cell, CellGroup } from 'vant';
import { Button } from 'vant';
Vue.use(Field).use(Cell).use(CellGroup).use(Button);

Vue.config.productionTip = false//去除广告内容

let vm= new Vue({
  render: h => h(App),

    router,store,
}).$mount('#app')
export default vm;
