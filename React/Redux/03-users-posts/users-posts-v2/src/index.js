import './scss/null.scss'
import './scss/style.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { fetchUsers } from './components/users/usersSlice'

store.dispatch(fetchUsers())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)