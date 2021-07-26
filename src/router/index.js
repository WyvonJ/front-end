import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    // route level code-splitting
    // this generates a separate chunk (javascript.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "javascript" */ '../views/JavaScript.vue');
    },
  },
  {
    path: '/css',
    name: 'Css',
    component() {
      return import(/* webpackChunkName: "css" */ '../views/Css.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
