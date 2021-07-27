export default [
  {
    path: 'horizontalverticalcenter',
    name: '水平垂直居中',
    component() {
      return import(/* webpackChunkName: "HorizontalVerticalCenter" */ '@/views/css/HorizontalVerticalCenter.vue');
    },
  },
  {
    path: 'flexbox',
    name: 'Flex布局',
    component() {
      return import(/* webpackChunkName: "FlexBox" */ '@/views/css/FlexBox.vue');
    },
  },
  {
    path: 'twocolumn',
    name: '两栏布局',
    component() {
      return import(/* webpackChunkName: "TwoColumn" */ '@/views/css/TwoColumn.vue');
    },
  },
  {
    path: 'threecolumn',
    name: '三栏布局',
    component() {
      return import(/* webpackChunkName: "ThreeColumn" */ '@/views/css/ThreeColumn.vue');
    },
  },
];
