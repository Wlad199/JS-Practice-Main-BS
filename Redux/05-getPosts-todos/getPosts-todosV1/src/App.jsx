//import classNames from 'classnames'
import React from 'react'
import Form from './Components/users/Form'
import Content from './Components/users/Content'
import TodoForm from './Components/todo/todoFor'
import TodoList from './Components/todo/TodoList'
import Posts from './Components/post/Posts'

export default function App() {

	return (
		<>
			<section>
				<h1>Redux Toolkit State Change</h1>
				<Form />
				<br />
				<Content />
			</section>
			<section>
				<br />
				<br />
				<TodoForm />
				<TodoList />
			</section>
			<section>
				<Posts />
			</section>
		</>
	)
}