
<template>
	<div>
		<input v-model="userName" type="text" placeholder="name">
		<input v-model="userPass" type="password" placeholder="password">
		<input v-model="userEmail" type="text" placeholder="email">
		<button @click="sendData()">Send</button>
	</div>
	<ul>
		<User v-for="(el, index) in users" :key="index" :user="el" :index="index" :deleteUser="deleteUser" />
	</ul>
</template>


<script>

import User from './components/User.vue'

export default {
	components: { User },

	data() {
		return {
			users: [],
			userName: '',
			userPass: '',
			userEmail: '',
		}
	},
	methods: {
		sendData() {
			this.users.push({
				name: this.userName,
				pass: this.userPass,
				email: this.userEmail
			})
		},
		deleteUser(index) {
			this.users.splice(index, 1)
		}
	}
}
</script>



<style scoped></style>
