declare module '@panter/vue-i18next' {
  import { PluginFunction } from 'vue'
  import i18next from 'i18next'

  export default class VueI18Next {
    constructor(i18n: i18next.i18n)

    readonly i18next: i18next.i18n

    static install: PluginFunction<never>
  }
}
