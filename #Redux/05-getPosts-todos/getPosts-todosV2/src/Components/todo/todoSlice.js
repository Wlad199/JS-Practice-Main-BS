import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	todos: [],
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload)
		},
		changeStatus: (state, action) => {
			const toggleCompletedTodo = state.todos.find((todo) => todo.id === action.payload)
			toggleCompletedTodo.status = !toggleCompletedTodo.status
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload)
		}
	}
})

export const { addTodo, changeStatus, deleteTodo } = todoSlice.actions
export default todoSlice.reducer