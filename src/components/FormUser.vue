<template>
  <form @submit.prevent="onSubmit" class="userForm">
    <h2 class="text-lg text-gray-500">User Form</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" name="name" @blur="v$.name.$touch" />
      <template v-if="v$.name.$error">
        <span v-if="v$.name.required.$invalid" class="error-message">Name is required.</span>
        <span v-if="v$.name.minLength.$invalid" class="error-message"
          >Name must be at least 3 characters long.</span
        >
      </template>
    </div>

    <div class="form-group">
      <label for="name">Email:</label>
      <input type="text" id="email" v-model="formData.email" name="email" @blur="v$.email.$touch" />
      <template v-if="v$.email.$error">
        <span v-if="v$.email.required.$invalid" class="error-message">Email is required.</span>
        <span v-if="v$.email.email.$invalid" class="error-message">Not a valid email</span>
      </template>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input
        type="text"
        id="password"
        v-model="formData.password"
        name="password"
        @blur="v$.password.$touch"
      />
      <template v-if="v$.password.$error">
        <span v-if="v$.password.required.$invalid" class="error-message"
          >Password is required.</span
        >
        <span v-if="v$.password.minLength.$invalid" class="error-message"
          >Password must be at least 8 characters long.</span
        >
      </template>
    </div>

    <div class="form-group">
      <label for="bio">Bio:</label>
      <textarea
        type="text"
        rows="3"
        id="bio"
        v-model="formData.bio"
        name="bio"
        @blur="v$.bio.$touch"
      />
      <template v-if="v$.bio.$error">
        <span v-if="v$.bio.required.$invalid" class="error-message">Bio is required.</span>
        <span v-if="v$.bio.minLength.$invalid" class="error-message"
          >Bio must be at least 10 characters long.</span
        >
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
