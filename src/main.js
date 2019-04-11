// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import App from './App';
import jquery from 'jquery';

require('bootstrap');

require('jquery.easing');

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap-vue/dist/bootstrap-vue.css');

require('devicon/devicon.css');

require('font-awesome/css/font-awesome.css');

require('./assets/css/main.css');

Vue.prototype.jquery = jquery

Vue.use(BootstrapVue)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
