import React, { useState } from 'react'
import TodoList from './components/Todos/TodoList'
import TodoForm from './components/Todos/TodoForm'


export default function App() {
	const [todos, setTodos] = useState([])

	const addTodoHandler = (text) => {
		setTodos([...todos, text])
	}
	const deleteTodoHandler = (index) => {
		setTodos(todos.filter((_, idx) => idx !== index))
	}

	return (
		<>
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos} deleteTodo={deleteTodoHandler} />
		</>
	)
}