import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export let useCounterStore = defineStore('counter', {

	state() {
		return {
			inputValue: '',
			todos: [],
		}
	},

	actions: {
		addTodo() {
			this.todos.push({
				id: nanoid(),
				text: this.inputValue,
				completed: true
			})
			this.inputValue = ''
		},
		toggleStatus(id) {
			const chossenTodo = this.todos.find(todo => todo.id === id)
			chossenTodo.completed = !chossenTodo.completed
		},
		deleteTodo(id) {
			this.todos = this.todos.filter(todo => todo.id !== id)
		}
	}
})