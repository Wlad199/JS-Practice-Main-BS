<template>
	<h1>Users</h1>
	<ul>
		<li v-for="user in users" :key="user.id">
			<router-link :to="{ name: 'user', params: { id: user.id } }">
				<h2>
					{{ user.name }}
				</h2>
			</router-link>
		</li>
	</ul>
</template>

<script setup>

const users = [{
	name: 'Alex',
	id: 1,
	text: 'lorem lorem lorem'
}, {
	name: 'Jhon',
	id: 2,
	text: 'lorem lorem lorem'
}, {
	name: 'Peter',
	id: 3,
	text: 'lorem lorem lorem'
}, {
	name: 'Kate',
	id: 4,
	text: 'lorem lorem lorem'
}]
</script>

<style scoped></style>