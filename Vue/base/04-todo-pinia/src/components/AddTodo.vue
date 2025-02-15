<template>
	<h1>Todo App</h1>
	<div>
		<input v-model="counter.inputValue" type="text" placeholder="enter todo...">
		<button @click="counter.addTodo()">Add Todo</button>
	</div>
</template>

<script setup>
//import { store } from "@/stores/store";
import { useCounterStore } from "@/stores/counterStore";

const counter = useCounterStore()


</script>

<style></style>