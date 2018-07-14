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
    expect(wrapper.find('.hello h1').text()).toEqual('Welcome to Your Vue.js App')
  })
})
