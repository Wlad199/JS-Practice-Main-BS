<template>
	<nav>
		<router-link to="/">Home</router-link>
		<router-link to="/about">about</router-link>
		<router-link :to="{ name: 'contacts' }">Contacts</router-link>
		<router-link :to="{ name: 'users' }">Users</router-link>
	</nav>
	<div class="nav-buttons">
		<button @click="back">back</button>
		<button @click="forward">forward</button>
		<button @click="redirect">redirect</button>
	</div>
	<div class="content">
		<RouterView />
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const back = () => {
	router.back(1)
	//router.go(-1)
}
const forward = () => {
	router.go(1)
}
const redirect = () => {
	router.push({ name: 'contacts' })
}

</script>

<style scoped></style>