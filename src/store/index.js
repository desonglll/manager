import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";

// Vuex的全局注入
Vue.use(Vuex);

// 创建vuex的实例
// 对外暴露
export default new Vuex.Store({
  modules: {
    tab,
  },
});
