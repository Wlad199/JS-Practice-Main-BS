<template>
	<form @submit.prevent="add" action="#">
		<div>
			<input v-model="newAssignment" type="text" placeholder="add assignment...">
			<button>Add</button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			newAssignment: ''
		}
	},
	methods: {

		add() {
			if (this.newAssignment) {
				this.$emit('add', this.newAssignment)
				this.newAssignment = ''
			}
		}
	}
}
</script>

<style></style>