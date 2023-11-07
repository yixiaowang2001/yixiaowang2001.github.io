import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/projects.vue"),
  },
  {
    path: "/photography",
    name: "photography",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/photography.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about.vue"),
  },
  {
    path: "/github",
    name: "github",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/github.vue"),
  },
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;