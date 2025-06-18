<template>
	<input
		type="text"
		placeholder="enter the message"
		v-model="message">
	<button
		@click="addTodoHandler(message)">
		Add Todo
	</button>

</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useTodoStore } from '@/stotes/store';

const todoStore = useTodoStore()
const message = ref<string>('')

const addTodoHandler = (inputValue: string) => {
	todoStore.addTodo(inputValue)
	message.value = ''
}
</script>

<style scoped lang='scss'></style>