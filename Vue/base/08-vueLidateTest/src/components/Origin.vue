<template>
  <form @submit.prevent="submitForm">
    <div>
      <div>
        <label for="name">Имя:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
        />
        <div v-if="$v.form.name.$error" class="error-message">
        <span v-if="!$v.form.name.required"
        >Имя обязательно для заполнения.</span
        >
          <span v-if="!$v.form.name.minLength"
          >Имя должно быть не менее
          {{ $v.form.name.$params.minLength.min }} символов.</span
          >
        </div>
      </div>

      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
        />
        <div
          v-if="$v.form.email.$error"
          class="error-message"
        >
        <span v-if="!$v.form.email.required"
        >Email обязателен для заполнения.</span
        >
          <span v-if="!$v.form.email.email">Некорректный email.</span>
        </div>
      </div>
    </div>

    <div>
      <label for="age">Возраст:</label>
      <input
        type="number"
        id="age"
        v-model.number="form.age"
      />
      <div
        v-if="$v.form.age.$error"
        class="error-message"
      >
        <span v-if="!$v.form.age.required"
        >Возраст обязателен для заполнения.</span
        >
        <span v-if="!$v.form.age.minValue"
        >Возраст должен быть не менее
          {{ $v.form.age.$params.minValue.min }}.</span
        >
      </div>
    </div>

    <button type="submit">Отправить</button>
  </form>
</template>

<script setup>
  import { computed, reactive } from 'vue'
  import useVuelidate from '@vuelidate/core'
  import { email, minLength, minValue, required } from '@vuelidate/validators'

  // 1. Определите данные формы
  const form = reactive({
    name: '',
    email: '',
    age: null,
  })

  // 2. Определите правила валидации
  const rules = computed(() => {
    return {
      form: {
        name: { required, minLength: minLength(3) },
        email: { required, email },
        age: { required, minValue: minValue(18) },
      },
    }
  })

  // 3. Используйте useVuelidate для получения экземпляра Vuelidate
  const $v = useVuelidate(rules, { form })

  // 4. Функция отправки формы
  const submitForm = async () => {
    const result = await $v.value.$validate() // Trigger `$v.form.$validate()`

    if (!result) {
      // Валидация не пройдена, ошибки уже отображаются в шаблоне
      return
    }

    // Валидация пройдена, отправьте форму
    alert('Форма отправлена!')
    console.log(form)
  }
</script>

<style scoped>
  .error-message {
    color: red;
    font-size: 0.8em;
  }
</style>
