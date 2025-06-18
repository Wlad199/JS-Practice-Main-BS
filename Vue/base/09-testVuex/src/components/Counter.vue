<template>
	<div>count: {{ store.state.count }}</div>
	<div>double count: {{ store.getters.double }}</div>
	<button
		@click="store.commit('increment', 500)">
		Increment
	</button>
	<button
		@click="decrement">
		decrement
	</button>
	<button @click="store.getters.double">double</button>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()

const decrement = () => {
	store.commit('decrement', 100)
}
</script>

<style scoped lang='scss'></style>