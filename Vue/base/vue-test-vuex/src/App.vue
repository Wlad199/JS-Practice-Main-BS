<template>
	<button @click="store.commit('increment')">+++</button>
	<p>{{ store.state.count }}</p>
	<button @click="store.commit('decrement')">----</button>
</template>

<script setup lang='ts'>
import { useStore } from 'vuex';

const store = useStore()
</script>

<style scoped lang='scss'></style>