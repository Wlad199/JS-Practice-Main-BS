<template>
	<ul>
		<li v-for="todo in todos" :key="todo.id">
			<input type="checkbox" v-model="todo.completed">
			<span>{{ todo.text }}</span>
			<button @click="todoStore.deleteTodo(todo.id)">delete</button>
		</li>
	</ul>
	<br>
	<button @click="todoStore.toggleTodo">Toggle Todo</button>
</template>

<script setup lang='ts'>
import { ITodo } from "../types/todo";
import { useTodoStore } from "../stores/todoStore";

const todoStore = useTodoStore()


const props = defineProps<{
	todos: ITodo[]
}>()

</script>

<style scoped lang='scss'></style>