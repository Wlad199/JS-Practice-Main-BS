import { createSlice, PayloadAction, createAsyncThunk, UnknownAction } from "@reduxjs/toolkit";

export type Todo = {
	id: string,
	title: string,
	completed: boolean
}

type TodosState = {
	todos: Todo[],
	loading: boolean,
	error: string | null
}

//! Thunks =================//

export const fetchTodos = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
	'todo/fetchTodos',
	async (_, { rejectWithValue }) => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
		if (!response.ok) {
			return rejectWithValue('Server error!')
		}
		const data = await response.json()
		return data
	}
)

export const addNewTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
	'todo/addNewTodo',
	async (text, { rejectWithValue }) => {
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
			return rejectWithValue('Can\'t add task. Server Error!')
		}

		return (await response.json()) as Todo
	}
)

export const toggleStatus = createAsyncThunk<Todo, string, { rejectValue: string, state: { todo: TodosState } }>(
	'todo/toggleStatus',
	async (id, { rejectWithValue, getState }) => {
		const todo = getState().todo.todos.find(todo => todo.id === id)

		if (todo) {
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
				return rejectWithValue('Can\'t add task. Server Error!')
			}
			return (await response.json()) as Todo
		}

		return rejectWithValue('No such todo in list')

	}
)

export const deleteTodo = createAsyncThunk<string, string, { rejectValue: string }>(
	'todo/deleteTodo',
	async (id, { rejectWithValue }) => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: 'DELETE'
		})

		if (!response.ok) {
			return rejectWithValue('Can\t delete todo. Server Error!')
		}

		return id
	}
)

//! Slice =================//

const initialState: TodosState = {
	todos: [],
	loading: false,
	error: null
}

const todosSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.pending, (state) => {
				state.loading = true;
				state.error = null
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.todos = action.payload;
				state.loading = false
			})

			.addCase(addNewTodo.pending, (state) => {
				state.error = null
			})
			.addCase(addNewTodo.fulfilled, (state, action) => {
				state.todos.push(action.payload)
			})

			.addCase(toggleStatus.fulfilled, (state, action) => {
				const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
				if (toggledTodo) {
					toggledTodo.completed = !toggledTodo.completed
				}
			})

			.addCase(deleteTodo.fulfilled, (state, action) => {
				state.todos = state.todos.filter(todo => todo.id !== action.payload)
			})

			.addMatcher(isError, (state, action: PayloadAction<string>) => {
				state.error = action.payload
				state.loading = false
			})
	}
})

function isError(action: UnknownAction) {
	return action.type.endsWith('rejected')
}

export default todosSlice.reducer

