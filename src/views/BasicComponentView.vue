<template>
  <ListItems :items="items" @onItemClick="onItemClick" v-slot="item">
    <div>{{ item.title }}</div>
  </ListItems>
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
