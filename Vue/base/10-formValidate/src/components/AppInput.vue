<template>
  <div class="form-control" :class="{ invalid: error }">
    <label :for="id">{{ label }}</label>
    <br />
    <input
      type="text"
      :id="id()"
      :placeholder="placeholder"
      :value="modelValue"
      @input="change"
    />
    <br />
    <small v-if="error">{{ error }} </small>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: String,
  error: String,
  label: String,
  placeholder: String,
})
const id = () => {
  return 'input-' + Math.random()
}
const change = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss"></style>
