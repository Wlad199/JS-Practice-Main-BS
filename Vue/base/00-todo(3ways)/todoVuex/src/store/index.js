import { nanoid } from "nanoid";
import { createStore } from "vuex";

const state = {
	todos: []
}

const mutations = {
	addTodo(state, payload) {
		state.todos.push({
			id: nanoid(),
			text: payload,
			isComplete: false
		})
	},
	deleteTodo(state, id) {
		state.todos = state.todos.filter(todo => todo.id !== id)
	},
	changeStatus(state, id) {
		const currentTodo = state.todos.find(todo => todo.id === id)
		if (currentTodo) {
			currentTodo.isComplete = !currentTodo.isComplete
			console.log(currentTodo.isComplete)
			console.log(state.todos)
		}
	}
}

const getters = {

}


export default createStore({
	state,
	mutations,
	getters
})