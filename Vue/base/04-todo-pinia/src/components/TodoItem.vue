<template>
	<li>
		<button @click="counter.deleteTodo(todo.id)">delete</button>
		<button @click="counter.toggleStatus(todo.id)">
			{{ todo.completed ? 'completed' : 'in process' }}
		</button>
		<span>{{ todo.text }}</span>
	</li>
</template>

<script setup>
import { useCounterStore } from "@/stores/counterStore";

const counter = useCounterStore()
defineProps({
	todo: Object
})
</script>

<style></style>