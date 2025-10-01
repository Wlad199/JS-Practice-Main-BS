<template>
	<nav>
		<router-link :to="{ name: 'Home' }">Home</router-link>
		<router-link :to="{ name: 'About' }">About</router-link>
		<router-link :to="{ name: 'Contacts' }">Contacts</router-link>
		<router-link :to="{ name: 'Users' }"> Users </router-link>
	</nav>
	<div>
		<button @click="goHome">Home</button>
		<button @click="prev">Prev</button>
		<button @click="next">Next</button>
	</div>
	<div class="content">
		<RouterView />
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const prev = () => {
	router.back(1)
}
const next = () => {
	router.go(1)
}
const goHome = () => {
	router.push({ name: 'Home' })
}

</script>

<style>
.router-link-exact-active {
	color: chocolate
}
</style>