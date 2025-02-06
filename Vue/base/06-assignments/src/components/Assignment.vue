<template>
	<li>
		<p>
			<input v-model="assignment.completed" type="checkbox">
			{{ assignment.name }}
		</p>
	</li>
</template>

<script>
export default {
	props: {
		assignment: Object
	}
}
</script>

<style></style>