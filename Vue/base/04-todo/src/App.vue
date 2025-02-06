

<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'

export default {
	components: { AddTodo, TodoList }
}
</script>


<template>
	<h1>Todo App</h1>
	<AddTodo />
	<TodoList />
</template>


<style scoped></style>
