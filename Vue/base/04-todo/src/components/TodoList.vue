<template>
	<h2>Todo List:</h2>
	<ul>
		<TodoItem v-for="todo in store.todos" :key="todo.id" :text="todo.text" :completed="todo.completed" :id="todo.id" />
	</ul>
</template>

<script>
import { store } from '../store.js';
import TodoItem from './TodoItem.vue'

export default {
	components: {
		TodoItem
	},
	data() {
		return {
			store
		}
	}
}
</script>