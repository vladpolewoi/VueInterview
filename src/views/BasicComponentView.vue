<template>
  <h3 class="text-xl mb-10">Hello from BasicComponent</h3>
  <ListItems :items="items" @onItemClick="onItemClick" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ListItems from '@/components/ListItems/ListItems.vue'
import type ITodoItem from '@/types/ITodoItem'
import { sampleData } from '@/types/ITodoItem'

const items = reactive<ITodoItem[]>(sampleData)

function onItemClick(id: string) {
  console.log('onItemClick', id)
}
</script>

<style lang="scss" scoped></style>
