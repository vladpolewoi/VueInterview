<template>
  <div class="colorBox" :style="{ backgroundColor: color, color: textColor }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: true,
    validator: (value: string) => {
      return /^#[0-9A-F]{3,6}$/i.test(value)
    }
  }
})

const textColor = computed<string>(() => {
  // convert hex to rgb
  const [red, green, blue] = props.color
    .replace('#', '')
    .match(/.{2}/g)!
    .map((hex) => parseInt(hex, 16))
  // calculate luminance with algorithm
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255

  return luminance > 0.5 ? 'black' : 'white'
})
</script>

<style lang="scss" scoped>
.colorBox {
  @apply flex items-center justify-center;
  @apply py-4 px-6 rounded-lg;
  transition-property: background-color, color;
  transition-duration: 0.2s;
}
</style>
