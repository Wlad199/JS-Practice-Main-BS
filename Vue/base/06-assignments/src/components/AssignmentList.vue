<template>
	<section v-show="assignments.length">
		<h2>{{ title }}</h2>
		<AssignmentTags @change="currentTag = $event" :initial-tags="assignments.map(a => a.tag)" :currentTag="currentTag" />
		<ul>
			<Assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment" />
		</ul>
	</section>
</template>

<script>
import Assignment from "./Assignment.vue";
import AssignmentTags from "./AssignmentTags.vue";
export default {
	components: {
		Assignment,
		AssignmentTags
	},
	props: {
		assignments: Array,
		title: String
	},
	data() {
		return {
			currentTag: 'all'
		}
	},
	computed: {
		tags() {
			return ['all', ...new Set(this.assignments.map(assignment => assignment.tag))]
		},
		filteredAssignments() {
			if (this.currentTag === 'all') {
				return this.assignments
			}
			return this.assignments.filter(item => item.tag === this.currentTag)
		}
	}
}
</script>

<style></style>