<template>
  <div>
    <form @submit.prevent class="p-6 border rounded-sm border-gray-800 mb-10">
      <h2 class="mb-1">Create new Todo:</h2>
      <input type="text" v-model="newTodo" />
      <button class="ml-2" @click="onCreateClick">Create</button>
    </form>

    <ListItems :items="todo.items" v-slot="item">
      <div class="flex items-center">
        <input
          @change="onChangeClick(item.id)"
          type="checkbox"
          class="mr-2"
          :checked="item.isCompleted"
        />
        <div class="w-full">{{ item.title }}</div>
        <button @click="onRemoveClick(item.id)" class="p-1 px-2 hover:bg-gray-600">X</button>
      </div>
    </ListItems>

    <span class="inline-block mt-10 mb-2">Completed:</span>
    <ListItems :items="todo.completedItems" v-slot="item">
      {{ item.title }}
    </ListItems>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ListItems from '@/components/ListItems/ListItems.vue'
import { useTodoStore } from '@/stores/todo'
import { uuid } from 'vue-uuid'

const todo = useTodoStore()

const newTodo = ref<string>('')

function onCreateClick() {
  todo.addItem({
    id: uuid.v4(),
    title: newTodo.value,
    isCompleted: false
  })

  newTodo.value = ''
}

function onRemoveClick(id: string) {
  todo.removeItem(id)
}

function onChangeClick(id: string) {
  console.log('AD', id)
  todo.toggleItem(id)
}
</script>

<style lang="scss" scoped></style>
