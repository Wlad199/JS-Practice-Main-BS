<template>
	<input
		type="text"
		placeholder="enter the message"
		v-model="message">
	<button
		@click="transferData">
		Add Todo
	</button>

</template>

<script setup lang='ts'>
import { ref, defineEmits } from 'vue'

const message = ref<string>('')

const emit = defineEmits<{
	inputData: [message: string]
}>()

const transferData = () => {
	emit('inputData', message.value)
	message.value = ''
}


</script>

<style scoped lang='scss'></style>