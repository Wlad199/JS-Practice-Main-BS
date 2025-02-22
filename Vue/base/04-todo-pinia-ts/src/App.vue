<template>
	<div class="container">
		<h1>Todo App</h1>
		<AddNewTodo />
		<TodoList />
	</div>
</template>

<script setup lang="ts">
import AddNewTodo from './components/AddNewTodo.vue'
import TodoList from './components/TodoList.vue';
</script>

<style scoped></style>

