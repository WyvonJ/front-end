import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Utils from './components/utils';
import './assets/style/index.scss';

Vue.config.productionTip = false;
Vue.use(Utils);

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
