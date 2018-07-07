import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
jest.mock('axios');

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.$el.querySelectorAll(".hello h2").length).toBeGreaterThan(1);
  })
})
