<template>
	<button @click="store.commit('decrement')">---</button>
	<button @click="increment">++++</button>
	<button @click="double">double</button>
	<p>count: {{ store.state.count }}</p>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore()

const increment = () => store.commit('increment', 10)
const double = computed(() => store.getters.double)

</script>

<style scoped lang='scss'></style>