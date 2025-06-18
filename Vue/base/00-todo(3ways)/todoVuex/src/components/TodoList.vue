<template>
	<h2>Todo List</h2>
	<ul>
		<li v-for="{ id, text, isComplete } in store.state.todos">
			<button
				@click="changeStatus(id)">
				{{ isComplete ? 'true' : 'false' }}
			</button>
			<span>{{ text }}</span>
			<button @click="deleteTodo(id)">delete</button>
		</li>
	</ul>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const deleteTodo = (id) => {
	store.commit('deleteTodo', id)
}

const changeStatus = (id) => {
	store.commit('changeStatus', id)
}

</script>

<style scoped lang='scss'></style>