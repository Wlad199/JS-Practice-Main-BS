<template>
	<form @submit.prevent>
		<input v-model="todoText" type="text" placeholder="todo...">
		<button @click="handlerAddNewTodo(todoText)">Add Todo</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todoStore.ts"

const todoStore = useTodoStore()

let todoText = ref('')

const handlerAddNewTodo = (id: string) => {
	todoStore.addNewTodo(id)
	todoText.value = ''
}


</script>

<style scoped  lang='scss'></style>