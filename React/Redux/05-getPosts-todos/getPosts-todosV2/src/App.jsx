//import classNames from 'classnames'
import React from 'react'
import Form from './Components/users/Form'
import Content from './Components/users/Content'
import TodoForm from './Components/todo/TodoForm'
import TodoList from './Components/todo/TodoList'
import PostsList from './Components/posts/PostsList'

export default function App() {

	return (
		<>
			<section>
				<h1>Redux Toolkit State Change</h1>
				<Form />
				<Content />
			</section>
			<section>
				<TodoForm />
				<TodoList />
			</section>
			<section>
				<PostsList />
			</section>
		</>
	)
}