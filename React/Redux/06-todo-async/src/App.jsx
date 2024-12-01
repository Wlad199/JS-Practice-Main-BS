//import classNames from 'classnames'
import React from 'react'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'
import { useSelector } from 'react-redux'
//(https://www.youtube.com/watch?v=6RTbC8Acj1M)

export default function App() {

	const { status, error } = useSelector(state => state.todos)

	return (
		<>

			<NewTodoForm />
			<section>
				{status === 'pending' && 'LOADING...'}
				{status === 'rejected' && <h2>An error occured {error}</h2>}
			</section>
			<TodoList />
		</>
	)
}