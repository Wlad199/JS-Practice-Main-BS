
<template>
	<li>
		<span>{{ user.name }}</span>
		<span>{{ user.pass }}</span>
		<span>{{ user.email }}</span>
		<button @click="deleteUser(index)">delete</button>
	</li>
</template>

<script>
export default {
	props: {
		user: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			required: true
		},
		deleteUser: {
			type: Function,
			required: true
		}
	}
}
</script>