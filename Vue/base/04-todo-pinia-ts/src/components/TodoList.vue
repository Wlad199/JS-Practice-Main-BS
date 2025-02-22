<template>
	<ul>
		<li v-for="{ text, id, isCompleted } in todoStore.todos" :key="id">
			<button @click="todoStore.deleteTodo(id)">
				delete
			</button>
			<button @click="todoStore.changeStatus(id)">
				{{ isCompleted ? 'completed' : 'in process...' }}
			</button>
			<span>{{ text }}</span>
		</li>
	</ul>
</template>

<script setup lang='ts'>
import { useTodoStore } from "../stores/todoStore.ts"

const todoStore = useTodoStore()

</script>

<style scoped  lang='scss'></style>