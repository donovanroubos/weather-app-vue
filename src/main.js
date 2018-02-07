// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import http from 'vue-resource';
import { parseString } from 'xml2js';

import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(http);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
