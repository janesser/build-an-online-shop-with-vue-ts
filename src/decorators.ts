import { ComputedOptions } from 'vue'
import { createDecorator } from 'vue-class-component'

export const NoCache = createDecorator((options, key) => {
  if (options && options.computed) {
    if (options.computed[key] === undefined) {
      options.computed[key] = {
        cache: false
      }
    } else {
      (options.computed[key] as ComputedOptions<any>).cache = false
    }
  }
})
