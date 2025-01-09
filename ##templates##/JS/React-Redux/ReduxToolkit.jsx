/*

npm install @reduxjs/toolkit
npm install react-redux


configureStore настраивает хорошо сконфигурированное хранилище Redux с помощью одного вызова функции,
	включая объединение редьюсеров, добавление промежуточного ПО thunk и настройку интеграции Redux DevTools. 
createSlice позволяет писать редьюсеры, использующие библиотеку Immer для написания неизменяемых обновлений 
	с помощью «изменяющего» синтаксиса JS, такого как state.value = 123, без необходимости в спредах.
	Он также автоматически генерирует функции создания действий для каждого редьюсера 
	и генерирует строки типов действий на основе имён ваших редьюсеров


useDispatch() — это функция Redux хранилища(store). 
	Вы вызываете store.dispatch, чтобы отправить действие. Это единственный способ вызвать изменение состояния.
useSelector()​ позволяет извлекать данные из состояния(state) хранилища(store) Redux с помощью функции селектора.

createAsyncThunk(): принимает тип операции и функцию, возвращающую промис, и генерирует thunk, 
	отправляющий типы операции pending/fulfilled/rejected на основе промиса

! Base template ====================================================================================================//
* JSX Template =====================================================================================================//
? Store =================//
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export default configureStore({
	reducer: {
		counter: counterReducer
	}
})

? Slice =================//
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0
	},
	reducers: {
		increment: state => { state.value += 1 },
		decrement: state => { state.value -= 1 }
	}
})
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer

? App =================//
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/counterSlice'

export default function App() {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()
	return (
		<>
		<button onClick={() => dispatch(increment())}>+++</button>
		<span>{count}</span>
		<button onClick={() => dispatch(decrement())}>---</button>
		</>
		)
	}
	
	? index =================//
	import { Provider } from 'react-redux'
	import store from './store/store'
	<Provider store={store}>
	<App />
	</Provider>
	
* TSX Template =====================================================================================================//
? Store =================//
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'

const store = configureStore({
	reducer: {
		ttodos: todoReducer
	}
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


? Slice =================//
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
	id: string;
	title: string;
	completed: boolean
}

type TodoState = {
	list: Todo[]
}

const initialState: TodoState = {
	list: []
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			state.list.push({
				id: new Date().toISOString(),
				title: action.payload,
				completed: false,
			})
		}
	}
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer

? hooks =================//
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, RootState } from './store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

! Async request =======================================================================================//
* JSX Template ========================================================================================//
? store (async) =================//
import { configureStore } from '@reduxjs/toolkit'
import todoReduser from './Components/todoSlice'

export default configureStore({
	reducer: {
		ttodos: todoReduser
	}
})

? Slice (async) =================//
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk(
	'todos/fetchTodo', async () => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
			const data = await response.data
			return data
		} catch (err) {
			return err.message
		}
	}
)

const initialState = {
	ttodos: [],
	status: null,
	error: null
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchTodo.fulfilled, (state, action) => {
				state.todos = action.payload
			})
	}
})

export default todoSlice.reducer

? App (async) =================//
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchTodo } from "./Components/todoSlice"

export default function App() {

	const dispatch = useDispatch()
	const todos = useSelector(state => state.todos.todos)

	useEffect(() => {
		dispatch(fetchTodo())
	}, [dispatch])


	return (
		<ul>
			{todos.map(todo => (
				<li key={todo.id}>{todo.title}</li>
			))}
		</ul>
	)
}
!  ====================================================================================================//
* TSX Template (async)  ===============================================================================//
? define types
export type Todo = {
	id: string,
	title: string,
	completed: boolean
}
type TodosState = {
	ttodos: Todo[],
	loading: boolean,
	error: string | null
}

? Thunks TSX (async)
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

? TSX (async)
const initialState: TodosState = {
	ttodos: [],
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
			## Errors
			.addMatcher(isError, (state, action: PayloadAction<string>) => {
				state.error = action.payload
				state.loading = false
			})
	}
})
## Errors
function isError(action: UnknownAction) {
	return action.type.endsWith('rejected')
}
export default todosSlice.reducer


!  ====================================================================================================//

? Настройка createSlice с полезной нагрузкой
	Если нужно настроить создание значения полезной нагрузки,
	 то значением соответствующего поля объекта reducers аргумента должен быть объект, а не функция.
	 Этот объект должен содержать два свойства: reducer и prepare. 
	 Значение поля reducer должно быть функцией-редуктором, 
	 а значение поля prepare должно быть функцией обратного вызова prepare:

import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: {
			reducer: (state, action) => {
				state.push(action.payload)
			},
			prepare: (text) => {
				const id = nanoid()
				return { payload: { id, text } }
			},
		},
	},
})

? В слайсах предпочтительней экспортировать ф-ю, которая достает массив данных
	Это поможет если данные прийдут в другом формате
	(не прейдется искать в нескольких файлах)

	export const selectAllPosts = (state) => state.posts
Вызов:
	const users = useSelector(selectAllUsers)












*/