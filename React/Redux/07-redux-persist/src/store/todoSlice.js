import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
	list: []
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addNewTodo: {
			reducer: (state, action) => {
				state.list.push(action.payload)
			},
			prepare: (text) => {
				const id = nanoid()
				const completed = false
				return {
					payload: { id, text, completed }
				}
			}
		},
		toggleStatus: (state, action) => {
			const toggledTodo = state.list.find(todo => todo.id === action.payload)
			toggledTodo.completed = !toggledTodo.completed
		},
		deleteTodo: (state, action) => {
			state.list = state.list.filter(todo => todo.id !== action.payload)
		}
	}
})

export const { addNewTodo, toggleStatus, deleteTodo } = todoSlice.actions
export default todoSlice.reducer