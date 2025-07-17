<template>
  <form @submit.prevent="submitForm">
    <div>
      <div>
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="form.name" />
        <span v-if="v$.$errors.find((er) => er.$property === 'name')">
          {{
            v$.$errors.find((er) => er.$property === 'name').$message
          }}
        </span>
      </div>

      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="form.email" />
        <span v-if="fieldWithError('email')">
          {{ fieldWithError('email').$message }}
        </span>
      </div>

      <div>
        <label for="age">Age:</label>
        <input id="age" type="number" v-model="form.age" />
        <span v-if="fieldWithError('age')"
          >{{ fieldWithError('age').$message }}
        </span>
      </div>
    </div>
    <button type="submit">Send Form</button>
  </form>
</template>

<script setup>
  import { computed, reactive, ref } from 'vue'
  import {
    email,
    minLength,
    minValue,
    required,
  } from '@vuelidate/validators'
  import useVuelidate from '@vuelidate/core'

  const form = ref({
    name: '',
    email: '',
    age: null,
  })

  const rules = computed(() => {
    return {
      form: {
        name: { required, minLength: minLength(3) },
        email: { required, email },
        age: { required, minValue: minValue(18) },
      },
    }
  })

  const v$ = useVuelidate(rules, { form })

  const submitForm = async () => {
    const result = await v$.value.$validate()

    if (!result) {
      return
    }
    alert('Form sent!')
  }

  const fieldWithError = (name) => {
    return v$.value.$errors.find((er) => er.$property === name)
  }
</script>

<style scoped lang="scss"></style>
