import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import FeUI from './components';
import './assets/style/index.scss';

Vue.config.productionTip = false;
Vue.use(FeUI);

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
