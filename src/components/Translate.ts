import Vue from 'vue'
import Component from 'vue-class-component'

const langs = ['de', 'fr', 'en']

@Component
export default class Translate extends Vue {

  i = 0

  get curLang(): string {
    return langs[this.i]
  }

  nextLang() {
    this.i = (this.i + 1) % langs.length

    const newLang = langs[this.i]
    this.$i18n.i18next.changeLanguage(newLang)
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
  }
}
