<template>
	<h1>Users</h1>
	<ul>
		<li v-for="user in users" :key="user.id">
			<router-link
				:to="{
					name: 'User',
					params: { id: user.id },
					query: { name: user.name }
				}">
				<h2>{{ user.name }}</h2>
			</router-link>
		</li>
	</ul>
</template>

<script setup>
import { ref } from 'vue';


const users = ref([
	{
		name: 'Alex',
		id: 1
	}, {
		name: 'Jhon',
		id: 2
	}, {
		name: 'Sahra',
		id: 3
	}
])


</script>

<style scoped></style>