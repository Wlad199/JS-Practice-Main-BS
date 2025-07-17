import { createStore } from "vuex";

const state = {
	todos: [{
		text: 'text1',
		id: 1,
		complteted: false
	}, {
		text: 'text2',
		id: 2,
		complteted: false
	}, {
		text: 'text3',
		id: 3,
		complteted: false
	}, {
		text: 'text4',
		id: 4,
		complteted: false
	}],
	inputValue: ''
}

const getters = {
	allTodos: (state) => state.todos,
	onlyOddIdTodos(state) {
		return state.todos.filter(todo => todo.id % 2 === 0)
	},
	filteredTodos(state) {
		return state.todos.filter(todo => {
			return todo.text.includes(state.inputValue)
		})
	}
}

const mutations = {}

const actions = {}



export default createStore({
	state,
	getters,
	mutations,
	actions
})