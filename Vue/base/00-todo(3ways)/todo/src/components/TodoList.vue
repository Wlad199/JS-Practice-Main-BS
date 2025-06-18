<template>
	<h3>Todo List:</h3>
	<ul v-for="{ text, id, isComplete } in props.todo" :key="id">
		<li>
			<button @click="changeStatusHandler(id)">{{ isComplete }}</button>
			<span>{{ text }}</span>
			<button @click="deleteTodoHandler(id)">delete</button>
		</li>
	</ul>
</template>

<script setup lang='ts'>
import { type ITodo } from '@/App.vue'

const props = defineProps<{
	todo: ITodo[],
	deleteTodo: (id: string) => void,
	changeStatus: (id: string) => void
}>()

const deleteTodoHandler = (id: string) => {
	props.deleteTodo(id)
}

const changeStatusHandler = (id: string) => {
	props.changeStatus(id)
}

</script>

<style scoped lang='scss'></style>