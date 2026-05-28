<template>
	<nav>
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link :to="{ name: 'contacts' }">Contacts</router-link>
		<router-link :to="{ name: 'users' }">Users</router-link>
	</nav>
	<div class="content">
		<RouterView />
	</div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
a {
	cursor: pointer;
	margin: 0 15px;
}
</style>
