<template>
  <ul class="flex gap-4">
    <li>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    </li>
  </ul>

  <div class="container pt-10">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
