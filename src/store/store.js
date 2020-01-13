import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
//加载vuex
Vue.use(Vuex);

//创建store
import actions from './actions';
import mutations from './mutations';
import state from './state';
export default new Vuex.Store({
    actions,mutations,state,
})
