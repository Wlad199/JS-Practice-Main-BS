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



! Base template ====================================================================================================//
? store =================//
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export default configureStore({
	reducer: {
		counter: counterReducer
	}
})

? clice =================//
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
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
! ====================================================================================================//


















*/