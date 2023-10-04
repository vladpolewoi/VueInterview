import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type ITodoItem from '@/types/ITodoItem'
import { sampleData } from '@/types/ITodoItem'

export const useTodoStore = defineStore('todo', () => {
  const items = reactive<ITodoItem[]>(sampleData)
  const completedItems = computed(() => items.filter((item) => item.isCompleted))

  function addItem(item: ITodoItem) {
    items.push(item)
  }

  function removeItem(id: string) {
    const index = items.findIndex((item) => item.id === id)

    if (index >= 0) {
      items.splice(index, 1)
    }
  }

  function toggleItem(id: string) {
    const index = items.findIndex((item) => item.id === id)

    if (index >= 0) {
      items[index].isCompleted = !items[index].isCompleted
    }
  }

  return {
    items,
    completedItems,
    addItem,
    removeItem,
    toggleItem
  }
})
