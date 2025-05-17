<template>
	<div>
		<input type="text" v-model="todoStore.inputValue" placeholder="text todo">
		<button @click="todoStore.addTodo">Add todo</button>
	</div>
</template>

<script setup lang='ts'>
import { useTodoStore } from "../stores/todoStore";

const todoStore = useTodoStore()

</script>

<style scoped lang='scss'></style>