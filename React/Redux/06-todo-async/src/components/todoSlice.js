import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=0'

export const fetchTodos = createAsyncThunk(
	'todos/fetchTodos',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(URL)

			if (!response.ok) {
				throw new Error('Server Error!!!')
			}

			const data = response.json()
			return data

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const deleteTodoById = createAsyncThunk(
	'todos/deleteTodoById',
	async (id, { rejectWithValue, dispatch }) => {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
				method: 'DELETE'
			})


			if (!response.ok) {
				throw new Error('Can\'t delete task. Server error!')
			}

			dispatch(deleteTodo(id))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const changeStatusById = createAsyncThunk(
	'todos/changeStatusById',
	async (id, { rejectWithValue, dispatch, getState }) => {

		const todo = getState().todos.todos.find(todo => todo.id === id)

		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					completed: !todo.completed
				})
			})

			if (!response.ok) {
				throw new Error('Can\'t toggle status. Server error!')
			}

			dispatch(changeStatus(id))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addNewTodo = createAsyncThunk(
	'todos/addNewTodo',
	async (text, { rejectWithValue, dispatch }) => {
		try {
			const todo = {
				title: text,
				userId: 1,
				completed: false
			}
			const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(todo)
			})

			if (!response.ok) {
				throw new Error('Can\'t add task. Server error!')
			}

			const dataTodo = await response.json()
			dispatch(addTodo(dataTodo))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

//* Slice ===================================================//

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
			toggledStatus.completed = !toggledStatus.completed
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload)
		}
	},
	extraReducers(builder) {
		builder
			.addCase(fetchTodos.pending, (state) => {
				state.status = 'pending'
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.status = 'fulfilled'
				state.todos = action.payload
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload
			})
			.addCase(deleteTodoById.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload
			})
			.addCase(changeStatusById.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload
			})
	}
})

const { addTodo, changeStatus, deleteTodo } = todoSlice.actions
export default todoSlice.reducer