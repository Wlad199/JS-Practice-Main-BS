<template>
  <div class="container">
    <form @submit.prevent="submitHandler" class="card">
      <h1>Form of developer</h1>
      <AppInput
        v-model="user.name"
        placeholder="Enter your name"
        :error="user.errors.name"
        label="What's your name?"
      />
      <br />
      <app-input
        :v-model="user.age"
        placeholder="Enter your age"
        :error="user.errors.age"
        label="What's your age?"
      ></app-input>
      <!--      <div class="form-control">-->
      <!--        <label>-->
      <!--          <input-->
      <!--            v-model.trim.number="user.age"-->
      <!--            type="number"-->
      <!--            placeholder="Enter your age"-->
      <!--            value="20"-->
      <!--            max="70"-->
      <!--          />-->
      <!--        </label>-->
      <!--      </div>-->
      <br />
      <div class="form-control">
        <label>
          <select v-model="user.city">
            <option value="moskow">Moscow</option>
            <option value="tver">Tver</option>
            <option value="murmansk">Murmansk</option>
          </select>
        </label>
      </div>
      <br />
      <div class="form-control">
        <h2>Ready to move?</h2>
        <label>
          <input v-model="user.relocate" type="radio" name="move" value="yes" />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input v-model="user.relocate" type="radio" name="move" value="no" />
          <span>No</span>
        </label>
      </div>
      <br />
      <div class="form-control">
        <h2>Your hard skills?</h2>
        <label>
          <input
            v-model="user.skils"
            type="checkbox"
            name="skils"
            value="vue"
          />
          <span>Vue</span>
        </label>
        <br />
        <label>
          <input
            v-model="user.skils"
            type="checkbox"
            name="skils"
            value="vue-cli"
          />
          <span>Vue CLI</span>
        </label>
        <br />
        <label>
          <input
            v-model="user.skils"
            type="checkbox"
            name="skils"
            value="router"
          />
          <span>Router</span>
        </label>
      </div>
      <br />
      <br />
      <div class="form-control">
        <label>
          <input type="checkbox" v-model="user.agree" />
          <span>Agree with rules</span>
        </label>
      </div>
      <br />
      <button>Send Form</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppInput from '@/components/AppInput.vue'

const user = ref({
  name: '',
  age: 35,
  city: 'murmansk',
  relocate: null,
  skils: [],
  agree: true,
  errors: {
    name: null,
    age: null,
  },
})

const formIsValid = () => {
  let isValid = true
  if (user.value.name.length === 0) {
    user.value.errors.name = 'Enter Your name'
    isValid = false
  } else {
    user.value.errors.name = ''
  }
  if (user.value.age < 18) {
    user.value.errors.age = 'Too young'
  } else if (user.value.age > 70) {
    user.value.errors.age = 'Too old'
  } else {
    user.value.errors.age = ''
  }

  return isValid
}

const submitHandler = () => {
  if (formIsValid()) {
    console.log(user.value.name)
    console.log(user.value.age)
    console.log(user.value.city)
    console.log(user.value.relocate)
    console.log(user.value.skils)
    console.log(user.value.agree)
    user.value.name = ''
  }
}
</script>

<style scoped>
.form-control small {
  color: red;
}
.form-control.invalid input {
  border-color: red;
}
</style>
