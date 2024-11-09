//import classNames from 'classnames'
import React from 'react'
import Form from './components/users/Form'
import Content from './components/users/Content'
import AddTodo from './components/todo/AddTodo'
import Todos from './components/todo/Todos'
import Posts from './components/posts/Posts'

export default function App() {

	return (
		<>
			<section>
				<h2>Users Form</h2>
				<Form />
				<Content />
				<p>-----------------------------------------------</p>
			</section>
			<section>
				<h2>Todos</h2>
				<AddTodo />
				<br />
				<br />
				<Todos />
				<p>-----------------------------------------------</p>
			</section>
			<section>
				<h2>Posts</h2>
				<Posts />
			</section>
		</>
	)
}