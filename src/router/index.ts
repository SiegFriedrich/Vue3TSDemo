import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "main",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainView.vue"),
    children: [
      {
        path: "/goods",
        name: "goods",
        meta: {
          isShow: true,
          title: "商品列表",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/GoodsView.vue"),
      },
      {
        path: "/users",
        name: "users",
        meta: {
          isShow: true,
          title: "用户列表",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UsersView.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // {
  // path: "/",
  // name: "login",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  // },
  {
    path: "/blog-main-page",
    name: "blogMainPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/BlogMainPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
