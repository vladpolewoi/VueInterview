<template>
  <template v-if="isLoading">
    <p>Loading...</p>
  </template>
  <template v-else-if="isError">
    <p>Something went wrong...</p>
  </template>
  <table v-else class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, reactive } from 'vue'

const isLoading = ref<boolean>(false)
const isError = ref<boolean>(false)
const users = reactive<any[]>([])

// I would actually make service here which will have method to fetch users :)
async function fetchData() {
  isLoading.value = true

  try {
    const usersData = await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res: any) => res?.data)
    users.push(...usersData)
  } catch (error) {
    isError.value = true
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped>
.table {
  th,
  td {
    @apply border border-slate-600 p-2;
  }
}
</style>
