import axios from 'axios';
import Vue from 'vue';
window.axios = axios;//暴露全局
Vue.prototype.$axios=axios;
export default axios;