import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    initialCounter: {
      default: 0
    },
    minValue: {
      default: 0
    },
    maxValue: {
      default: 10
    }
  }
})
export default class Counter extends Vue {
  minValue: number
  maxValue: number

  initialCounter: number

  // data
  counter = this.initialCounter;

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
