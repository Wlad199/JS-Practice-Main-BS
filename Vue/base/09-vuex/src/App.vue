<template>
	<div>count: {{ count }}</div>
	<button @click="increment">increment</button>
	<button @click="decrement(500)">decrement</button>
	<button @click="double">double</button>
	<button @click="asyncIncrement">Async increment</button>
	<button @click="asyncDecrement">Async decrement</button>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

// Получить store
const store = useStore()

// count получить через computed
const count = computed(() => (store.state.count))

// ф-я вызывает мутацию с payload
const increment = () => {
	store.commit('increment', 10)
}
// payload может быть в виде объекта
const decrement = (sum) => {
	store.commit({
		type: 'decrement',
		value: sum,
	})
}

// Получить свойство из геттеров с помощью computed
const double = computed(() => store.getters.double)

// Экшены запискаются через dispatch
const asyncIncrement = () => {
	store.dispatch('asyncIncrement', 50)
}
const asyncDecrement = () => {
	store.dispatch({
		type: 'asyncDecrement',
		value: 1000
	})
}
</script>

<style scoped></style>