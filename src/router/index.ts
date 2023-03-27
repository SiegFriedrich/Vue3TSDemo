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
    redirect:"/index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainView.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        meta: {
          isShow: true,
          title: "index",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/IndexView.vue"),
      },
      {
        path: "/skills",
        name: "skills",
        meta: {
          isShow: true,
          title: "skills",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/SkillsView.vue"),
      },
      {
        path: "/goods",
        name: "goods",
        meta: {
          isShow: true,
          title: "Goods",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/GoodsView.vue"),
      },
      {
        path: "/users",
        name: "users",
        meta: {
          isShow: true,
          title: "Users",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UsersView.vue"),
      },
      {
        path: "/D3",
        name: "D3",
        meta: {
          isShow: true,
          title: "D3",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/D3jsView.vue"),
      },
      {
        path: "/D3Grid",
        name: "D3Grid",
        meta: {
          isShow: true,
          title: "D3Grid",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/D3jsGridView.vue"),
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
