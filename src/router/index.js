import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import JavaScriptRoutes from './javascript';
import CssRoutes from './css';
import VueRoutes from './vue';

console.log('JavaScriptRoutes', JavaScriptRoutes);
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
    children: JavaScriptRoutes,
  },
  {
    path: '/css',
    name: 'Css',
    component() {
      return import(/* webpackChunkName: "css" */ '../views/Css.vue');
    },
    children: CssRoutes,
  },
  {
    path: '/vue',
    name: 'Vue',
    component() {
      return import(/* webpackChunkName: "vue" */ '../views/Vue.vue');
    },
    children: VueRoutes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
