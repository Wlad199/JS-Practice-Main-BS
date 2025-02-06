<template>
	<button :class="{
		'button': true,
		'blue': typeButton === 'primary',
		'purpure': typeButton === 'secondary',
		'gray': typeButton === 'muted',
		'is-loading': processing
	}" :disabled="processing">
		<slot />
	</button>
</template>

<script>
export default {
	props: {
		typeButton: {
			type: String,
			default: 'primary'
		},
		processing: {
			type: Boolean,
			default: false
		}
	},
}
</script>

<style></style>