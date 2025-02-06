<template>
	<div>
		<label>
			<p>Add New Todo</p>
			<input v-model="store.inputValue" type="text" placeholder="new todo" v-focus>
		</label>
		<button @click="store.addTodo()">Add Todo</button>
	</div>
</template>

<script>
import { store } from '../store.js'

export default {
	data() {
		return {
			store,
		}
	},
	directives: {
		focus: {
			mounted(el) {
				el.focus()
			},
			updated(el) {
				el.focus()
			},
		}
	}
}
</script>