<template>
  <form @submit.prevent="onSubmit" class="userForm">
    <h2 class="text-lg text-gray-500 text-center">User Form</h2>

    <div class="form-group" v-for="field in formFields" :key="field.name">
      <label for="name">{{ field.name.toUpperCase() }}:</label>
      <template v-if="field.type === 'textarea'">
        <textarea
          v-model="v$[field.name].$model"
          :name="field.name"
          :id="field.name"
          @blur="v$[field.name].$touch"
          :rows="field.rows"
        ></textarea>
      </template>
      <template v-else>
        <input
          v-model="v$[field.name].$model"
          type="text"
          :name="field.name"
          :id="field.name"
          @blur="v$[field.name].$touch"
        />
      </template>
      <template v-if="v$[field.name].$error">
        <span v-for="error in v$[field.name].$silentErrors" :key="error.$uid">{{
          error.$message
        }}</span>
      </template>
    </div>

    <button :disabled="v$.$invalid" :class="[v$.$invalid ? 'disabled' : '']">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

interface IFormData {
  name: string
  email: string
  password: string
  bio: string
}
const formData = reactive<IFormData>({
  name: '',
  email: '',
  password: '',
  bio: ''
})
const formFields = [
  { name: 'name' },
  { name: 'email' },
  { name: 'password' },
  { name: 'bio', rows: 3, type: 'textarea' }
]

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(3) },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    bio: { required, minLength: minLength(10) }
  }
})

const v$ = useVuelidate(rules, formData)

async function onSubmit() {
  const isValid = !v$.$invalid
  console.log('SUBMIT: ', isValid ? 'SUCESS' : 'FAIL')
}
</script>

<style lang="scss" scoped>
.userForm {
  .form-group {
    @apply flex flex-col mb-8 relative;

    label {
      @apply text-sm text-gray-500 mb-1;
    }

    span {
      @apply absolute bottom-[-20px] left-0 text-sm text-red-400 whitespace-nowrap;
    }
  }
}
</style>
