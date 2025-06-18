<template>
	<h1>Todo</h1>
	<AddTodo @inputData="addNewTodo" />
	<TodoList
		:todo="todoList"
		:deleteTodo="deleteTodo"
		:changeStatus="changeStatus" />
</template>

<script setup lang='ts'>
import { nanoid } from "nanoid";
import { ref } from 'vue'
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";

export interface ITodo {
	text: string;
	id: string;
	isComplete: boolean
}

const todoList = ref<ITodo[]>([])

const addNewTodo = (message: string) => {
	todoList.value.push({
		id: nanoid(),
		text: message,
		isComplete: false
	})
}

const deleteTodo = (id: string) => {
	todoList.value = todoList.value.filter(todo => todo.id !== id)
}

const changeStatus = (id: string) => {
	const currentTodo = todoList.value.find(todo => todo.id === id)
	if (currentTodo) {
		currentTodo.isComplete = !currentTodo.isComplete
	}
}

</script>

<style scoped lang='scss'></style>