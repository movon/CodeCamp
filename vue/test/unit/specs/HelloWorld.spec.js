import Vue from 'vue'
import { mount } from 'vue-test-utils'
import expect from 'expect'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      propsData: {
        dataHelloWorld: {
          msg: 'The message',
          rocketMsg: 'The Rocket-Message',
          items: [],
          active: ''
        }
      }
    })
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
