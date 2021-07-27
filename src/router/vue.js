export default [
  {
    path: 'computed',
    name: '计算属性',
    component() {
      return import(/* webpackChunkName: "Computed" */ '@/views/vue/Computed.vue');
    },
  },
];
