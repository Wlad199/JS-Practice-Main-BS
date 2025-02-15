import { nanoid } from "nanoid";
import { reactive } from "vue";

export const store = reactive({
	inputValue: '',
	todos: [],
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
})