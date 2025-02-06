<template>
	<li>
		<button @click="store.toggleStatus(id)" :class="[completed ? 'todo done' : 'todo']">
			{{ completed ? 'done ' : 'processing' }}
		</button>
		<span>{{ text }}</span>
		<button @click="store.deleteTodo(id)">delete</button>
	</li>
</template>

<script>
import { store } from '../store.js';

export default {
	props: {
		text: {
			type: String
		},
		completed: {
			type: Boolean
		},
		id: {
			type: String
		}
	},
	data() {
		return {
			store
		}
	}
}
</script>


<style scoped lang="scss">
.todo {
	background-color: #fbbe00;
	display: inline-block;

	&.done {
		background-color: #55ac6e;
	}
}
</style>