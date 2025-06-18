<template>
	<h1>Add Todo</h1>
	<input
		type="text"
		placeholder="new todo..."
		v-model="inputText">
	<button
		@click="addTodo(inputText)">
		Add Todo
	</button>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const inputText = ref()

const addTodo = (text) => {
	store.commit('addTodo', text)
	inputText.value = ''
}



</script>

<style scoped lang='scss'></style>