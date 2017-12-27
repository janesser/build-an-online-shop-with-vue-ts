/// <reference path="vue-i18next.d.ts" />
/// <reference path="vue-i18next-ext.d.ts" />

import Vue from 'vue'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'

Vue.use(VueI18Next)

i18next.init({
  // debug: true,
  lng: 'de' // TODO i18next browser plugin
})

const i18n = new VueI18Next(i18next)

export default i18n
