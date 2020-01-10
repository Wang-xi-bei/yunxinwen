import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './common/style/base.css'
import './axios/axios'
import './config/url'


Vue.config.productionTip = false

new Vue({
  data:{
    hd:true,
    ct:true,
    ft:true,
    sy:true,
  },
  router,
  render: h => h(App)
}).$mount('#app')
