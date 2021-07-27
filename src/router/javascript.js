export default [
  {
    path: 'eventloop',
    name: '事件循环',
    component() {
      return import(/* webpackChunkName: "EventLoop" */ '@/views/javascript/EventLoop.vue');
    },
  },
  {
    path: 'asynchronous',
    name: '异步',
    component() {
      return import(/* webpackChunkName: "Asynchronous" */ '@/views/javascript/Asynchronous.vue');
    },
  },
  {
    path: 'crossorigin',
    name: '跨域',
    component() {
      return import(/* webpackChunkName: "CrossOrigin" */ '@/views/javascript/CrossOrigin.vue');
    },
  },
  {
    path: 'this',
    name: 'this',
    component() {
      return import(/* webpackChunkName: "This" */ '@/views/javascript/This.vue');
    },
  },
  {
    path: 'promise',
    name: 'Promise',
    component() {
      return import(/* webpackChunkName: "Promise" */ '@/views/javascript/Promise.vue');
    },
  },
];
