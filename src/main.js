import Vue from "vue";
import App from "./App.vue";
// 按需引入ElementUI
// import { Row, Button } from "element-ui";
// 全局引入ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router"; // 引入router

Vue.config.productionTip = false;

// 按需引入Element UI
// Vue.use(Row);
// Vue.use(Button);

Vue.use(ElementUI); // 全局引入ElementUI

new Vue({
  // 挂载router
  router,
  render: (h) => h(App),
}).$mount("#app");
