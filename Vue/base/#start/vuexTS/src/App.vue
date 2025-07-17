<template>
	<div>
		{{ count }}
	</div>
	<button @click="increment">incement</button>
</template>

<script setup lang='ts'>
import { useStore } from 'vuex';
import { computed } from "vue";

const store = useStore()
const count = computed(() => store.state.count)

const increment = () => {
	store.commit('increment')
}


</script>

<style scoped lang='scss'></style>