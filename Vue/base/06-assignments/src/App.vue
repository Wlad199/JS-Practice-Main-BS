<template>
	<AssignmentList :assignments="filters.inProgress" title="In Progress" />
	<AssignmentList :assignments="filters.completed" title="Completed" />
	<!--<AssignmentCrete :assignments="assignments" />-->
	<AssignmentCrete @add="add" />
</template>

<script>
import AssignmentList from "./components/AssignmentList.vue";
import AssignmentCrete from "./components/AssignmentCrete.vue";
import axios from "axios";

export default {
	components: {
		AssignmentList,
		AssignmentCrete
	},
	data() {
		return {
			//assignments: [
			//	{ name: 'Finish Project', completed: false, id: 1, tag: 'math' },
			//	{ name: 'Read Chapter 4', completed: true, id: 2, tag: 'science' },
			//	{ name: 'Turn in Homework', completed: false, id: 3, tag: 'math' },
			//]
			assignments: []
		}
	},
	created() {
		axios.get('http://localhost:3001/assignments')
			.then(response => this.assignments = response.data)
	},
	methods: {
		add(name) {
			this.assignments.push({
				name: name,
				completed: false,
				id: this.assignments.length + 1,
				tag: 'untags'
			})
		}
	},
	computed: {
		filters() {
			return {
				inProgress: this.assignments.filter(assignment => !assignment.completed),
				completed: this.assignments.filter(assignment => assignment.completed)
			}
		}
	},
}
</script>

<style></style>