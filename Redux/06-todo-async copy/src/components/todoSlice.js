import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const fetchTodos = createAsyncThunk(
	'todos/fetchTodos', async (_, { rejectWithValue }) => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos')
			const data = response.json()
		} catch (err) {

		}
	}
)

const initialState = {
	todos: [],
	status: null,
	error: null
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload)
		},
		changeStatus: (state, action) => {
			const toggledStatus = state.todos.find(todo => todo.id === action.payload)
			toggledStatus.isCompleted = !toggledStatus.isCompleted
			console.log(toggledStatus)
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload)
		}
	}
})

export const { addTodo, changeStatus, deleteTodo } = todoSlice.actions
export default todoSlice.reducer