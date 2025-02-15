<template>
	<ul>
		<TodoItem v-for="todo in counter.todos" :todo="todo" :key="todo.key" />
	</ul>
</template>

<script setup>
//import { store } from "@/stores/store";
import TodoItem from "./TodoItem.vue";
import { useCounterStore } from "@/stores/counterStore";

const counter = useCounterStore()

</script>

<style></style>