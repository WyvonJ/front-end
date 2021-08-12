export default [
  {
    path: 'basic',
    name: 'JavaScrit基础',
    component() {
      return import(/* webpackChunkName: "Basic" */ '@/views/javascript/Basic.vue');
    },
  },
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
    path: 'new',
    name: 'new',
    component() {
      return import(/* webpackChunkName: "New" */ '@/views/javascript/New.vue');
    },
  },
  {
    path: 'promise',
    name: 'Promise',
    component() {
      return import(/* webpackChunkName: "Promise" */ '@/views/javascript/Promise.vue');
    },
  },
  {
    path: 'httprequest',
    name: 'HTTP请求',
    component() {
      return import(/* webpackChunkName: "HttpRequest" */ '@/views/javascript/HttpRequest.vue');
    },
  },
  {
    path: 'deepcopy',
    name: '深拷贝',
    component() {
      return import(/* webpackChunkName: "DeepCopy" */ '@/views/javascript/DeepCopy.vue');
    },
  },
  {
    path: 'throttledebounce',
    name: '防抖&节流',
    component() {
      return import(/* webpackChunkName: "ThrottleDebounce" */ '@/views/javascript/ThrottleDebounce.vue');
    },
  },
  {
    path: 'arraymethods',
    name: '数组方法',
    component() {
      return import(/* webpackChunkName: "ArrayMethods" */ '@/views/javascript/ArrayMethods.vue');
    },
  },
];
