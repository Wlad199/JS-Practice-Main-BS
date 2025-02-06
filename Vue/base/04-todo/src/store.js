import { reactive } from "vue";
import { nanoid } from 'nanoid'

export const store = reactive({
	todos: [],
	inputValue: '',
	addTodo() {
		this.todos.push({
			id: nanoid(),
			text: this.inputValue,
			completed: false
		})
		this.inputValue = ''
	},
	toggleStatus(id) {
		const currentTodo = this.todos.find(todo => todo.id === id)
		if (currentTodo) {
			currentTodo.completed = !currentTodo.completed
		}
	},
	deleteTodo(id) {
		this.todos = this.todos.filter(todo => todo.id !== id)
	}
})