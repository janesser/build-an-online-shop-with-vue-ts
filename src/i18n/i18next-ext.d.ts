import * as i18next from 'i18next'


declare module 'i18next' {
  export interface Store {
    data: Resource[]
  }

  export interface i18n {
    store: Store
  }
}

export = i18next
