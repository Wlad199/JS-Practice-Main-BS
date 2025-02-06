<template>
	<div>
		<p v-if="$slots.text">
			<slot name="text" />
		</p>
		<button v-if="$slots.button">
			<slot name="button" />
		</button>
		<span v-if="$slots.default">
			<slot />
		</span>
	</div>
</template>


<script>
</script>

<style></style>