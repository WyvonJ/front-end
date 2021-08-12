export default [
  {
    path: 'sort',
    name: '排序',
    component() {
      return import(/* webpackChunkName: "Sort" */ '@/views/algorithms/Sort.vue');
    },
  },
  {
    path: 'search',
    name: '查找',
    component() {
      return import(/* webpackChunkName: "search" */ '@/views/algorithms/Search.vue');
    },
  },
];
