import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";

// 创建路由组件
Vue.use(VueRouter);

// 定义路由
// 将路由与组件进行映射
const routes = [
  // 主路由
  {
    path: "/",
    component: Main,
    children: [
      // 子路由（嵌套路由）
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/user",
        component: User,
      },
    ],
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/user",
    component: User,
  },
];

// 创建router实例
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

// 将router实例对外暴露
export default router;
