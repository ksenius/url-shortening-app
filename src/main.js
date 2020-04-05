import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import './assets/scss/global.scss';

import Vue from 'vue';
import App from './App';
import router from './router';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
