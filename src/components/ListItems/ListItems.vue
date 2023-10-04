<template>
  <ul class="list">
    <li
      v-for="item in items"
      :key="item.id"
      class="list__item"
      data-test="item"
      @click="$emit('onItemClick', item.id)"
    >
      <slot v-bind="item"></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type ITodoItem from '@/types/ITodoItem'

defineProps<{
  items: ITodoItem[]
}>()

defineEmits<{
  onItemClick: [id: string]
}>()
</script>

<style lang="scss" scoped>
.list {
  @apply flex flex-col gap-2;

  &__item {
    @apply py-2 px-4 rounded-lg border border-gray-800;

    &:hover {
      @apply bg-gray-800 text-white cursor-pointer;
    }
  }
}
</style>
