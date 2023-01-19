import Vue from "vue";
import VueRouter from "vue-router";
// 引入组建
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";
import Mall from "../views/Mall.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";

// 创建路由组件
Vue.use(VueRouter);

// 定义路由
// 将路由与组件进行映射
const routes = [
  // 主路由
  {
    path: "/",
    component: Main,
    redirect: "/home", //重定向
    children: [
      // 子路由（嵌套路由）
      {
        // 首页
        path: "/home",
        component: Home,
      },
      {
        // 用户管理
        path: "/user",
        component: User,
      },
      {
        // 商品管理
        path: "/mall",
        component: Mall,
      },
      {
        // 页面1
        path: "/page1",
        component: PageOne,
      },
      {
        // 页面2
        path: "/page2",
        component: PageTwo,
      },
    ],
  },
];

// 创建router实例
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

// 将router实例对外暴露
export default router;
