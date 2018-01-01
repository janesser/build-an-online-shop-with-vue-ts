import Vue from 'vue'
import VueI18Next from '@panter/vue-i18next'
import i18next from 'i18next'

declare module 'vue/types/vue' {
  interface Vue {
    readonly $i18n: VueI18Next;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    i18n?: VueI18Next
  }
}
