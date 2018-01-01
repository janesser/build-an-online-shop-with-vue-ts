/// <reference path="vue-i18next.d.ts" />
/// <reference path="vue-ext.d.ts" />

import Vue from 'vue'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'
import LngDetector from 'i18next-browser-languagedetector'

Vue.use(VueI18Next)

const i18n = i18next
  .use(LngDetector)
  .init({
    debug: false,
    detection: {
      initImmediate: true,
      preload: true
    }
  })

const vueI18n = new VueI18Next(i18n)

export default vueI18n
