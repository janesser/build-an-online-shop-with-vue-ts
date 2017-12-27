/// <reference path="i18n/vue-i18next-ext.d.ts" />

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './hooks' // This must be imported before any component

import App from './App.vue'
import router from './router'
import i18n from './i18n'

Vue.config.productionTip = false

// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  i18n: i18n,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
