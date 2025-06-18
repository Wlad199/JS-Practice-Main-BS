<template>
	<h3>Todo List:</h3>
	<ul v-for="{ id, text, isComplete } in todoStore.todos" :key="id">
		<li>
			<button @click="todoStore.changeStatus(id)">{{ isComplete }}</button>
			<span>{{ text }}</span>
			<button @click="todoStore.deleteTodo(id)">delete</button>
		</li>
	</ul>
</template>

<script setup lang='ts'>
import { useTodoStore } from '@/stotes/store'

const todoStore = useTodoStore()

</script>

<style scoped lang='scss'></style>