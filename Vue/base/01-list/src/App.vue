
<template>
	<div>
		<input v-model="userName" type="text" placeholder="name">
		<input v-model="userPass" type="text" placeholder="password">
		<input v-model="userEmail" type="text" placeholder="email">
		<button @click="sendData()">Send</button>
	</div>
	<div>

		<div v-if="users.length === 0">There are no users</div>
		<div v-else-if="users.length === 1">There is 1 user</div>
		<div v-else="users.length > 1">There are {{ users.length }} users</div>

		<ul>
			<li v-for="(el, index) in users" :key="index">
				<p>{{ el.name }}</p>
				<p>{{ el.pass }}</p>
				<p>{{ el.email }}</p>
			</li>
		</ul>
	</div>
</template>


<script>
export default {
	data() {
		return {
			users: [],
			userName: '',
			userPass: '',
			userEmail: ''
		}
	},
	methods: {
		sendData() {
			this.users.push({
				name: this.userName,
				pass: this.userPass,
				email: this.userEmail
			})
		}
	}
}
</script>



<style scoped></style>
