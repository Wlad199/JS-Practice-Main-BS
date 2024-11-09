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

! Async request =======================================================================================//

? store (async) =================//
import { configureStore } from '@reduxjs/toolkit'
import todoReduser from './Components/todoSlice'

export default configureStore({
	reducer: {
		todos: todoReduser
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
	todos: [],
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
! Async request delete ====================================================================================================//
? Slice async delete =================//
export const deletePostById = createAsyncThunk('posts/deletePostById',
	async (id, { dispatch }) => {
		const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
		dispatch(deletePost(id))
	})

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		deletePost: (state, action) => {
			state.posts = state.posts.filter(post => post.id !== action.payload)
		}
	}
})

export const { deletePost } = postSlice.actions
export default postSlice.reducer

? App async delete =================//
import { deletePostById } from './postSlice'
	<button onClick={() => dispatch(deletePostById(post.id))}>
		Delete
	</button>

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

? В слайсах предпочтительней експортировать ф-ю, которая достает массив данных
	Это поможет если данные прийдут в другом формате
	(не прейдется искать в нескольких файлах)

	export const selectAllPosts = (state) => state.posts
Вызов:
	const users = useSelector(selectAllUsers)












*/