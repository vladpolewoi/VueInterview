import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ListItemsVue from '@/components/ListItems/ListItems.vue'
import { sampleData } from '@/types/ITodoItem'

const wrapper = mount(ListItemsVue, {
  props: {
    items: sampleData
  }
})

describe('ListItems.vue', () => {
  test('Renders all children', () => {
    const count = sampleData.length
    expect(wrapper.findAll('[data-test="item"]').length).toBe(count)
  })

  test('Item emits id on click', () => {
    const id = sampleData[0].id
    const item = wrapper.find('[data-test="item"]')
    item.trigger('click')

    expect(wrapper.emitted('onItemClick')).toBeTruthy()
    expect(wrapper.emitted('onItemClick')?.[0]).toEqual([id])
  })
})
