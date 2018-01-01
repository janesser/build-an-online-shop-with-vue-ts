/// <reference path="../i18n/i18next-ext.d.ts" />

import Vue from 'vue'
import Component from 'vue-class-component'
import { NoCache } from '../decorators'

@Component
export default class Translate extends Vue {

  private langs: string[]

  @NoCache
  get curLang() {
    const i18next = this.$i18n.i18next
    return i18next.language
  }

  nextLang() {
    const i18next = this.$i18n.i18next

    const i = this.langs.indexOf(i18next.language)
    const j = i >= 0
      ? (i + 1) % this.langs.length
      : 0

    const newLang = this.langs[j]
    i18next.changeLanguage(newLang)
  }

  created() {
    const i18next = this.$i18n.i18next

    i18next.addResourceBundle(
      'en',
      'translation',
      {
        'next': 'Next',
        'hello': 'Hello'
      }
    )

    this.langs = []
    for (let r in i18next.store.data) {
      this.langs.push(r)
    }
  }
}
