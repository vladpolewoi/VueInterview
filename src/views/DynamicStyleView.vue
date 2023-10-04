<template>
  <ColorBox :color="color">
    <h2>Text For Testing</h2>
  </ColorBox>
  <button @click="changeToRandomColor" class="mt-10">Change to Random Color</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ColorBox from '@/components/ColorBox.vue'

const color = ref<string>('#232323')

function changeToRandomColor() {
  // 16777215 is the decimal value of the hex color ffffff (0xFFFFFF)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  color.value = `#${randomColor}`
}
</script>
