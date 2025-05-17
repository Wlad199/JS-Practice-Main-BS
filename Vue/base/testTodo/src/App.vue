<template>
	<AddTodo />
	<TodoList :todos="todoStore.filteredTodos" />
</template>

<script setup lang="ts">
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import { useTodoStore } from "./stores/todoStore";

const todoStore = useTodoStore()

</script>

<style scoped></style>
