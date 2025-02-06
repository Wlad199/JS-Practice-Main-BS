<template>
	<div>
		<button @click="$emit('change', tag)" v-for="tag in tags" class="tag" :class="{ active: tag === currentTag }">
			{{ tag }}
		</button>
	</div>
</template>

<script>
export default {
	props: {
		initialTags: Array,
		currentTag: String
	},
	data() {
		return {

		}
	},
	computed: {
		tags() {
			return ['all', ...new Set(this.initialTags)]
		},
	}
}
</script>

<style></style>