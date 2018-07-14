import { mount } from 'vue-test-utils'
import expect from 'expect'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  const TEST_MESSAGE = 'The messsage'
  const TEST_ROCKET_MESSAGE = 'The rocket message'
  const TEST_ITEMS = ['Home', 'Messages', 'Friends']
  const TEST_ACTIVE = 'Home'
  let wrapper

  beforeEach(() => {
    wrapper = mount(HelloWorld)
    wrapper.setData({
      msg: TEST_MESSAGE,
      rocketMsg: TEST_ROCKET_MESSAGE,
      items: TEST_ITEMS,
      active: TEST_ACTIVE
    })
  })
  it('should render correct contents', () => {
    expect(wrapper.find('.hello h1').text()).toEqual(TEST_MESSAGE)
  })
})
