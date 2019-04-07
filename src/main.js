// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

require('bootstrap');

require('jquery.easing');

require('bootstrap/dist/css/bootstrap.css');

require('devicons/css/devicons.css');

require('font-awesome/css/font-awesome.css');

require('./assets/css/main.css');

Vue.prototype.jquery = jquery

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
