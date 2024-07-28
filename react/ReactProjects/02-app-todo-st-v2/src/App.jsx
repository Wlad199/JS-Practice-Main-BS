import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/Todos/TodoList'
import TodoForm from './components/Todos/TodoForm'
import TodoActions from './components/Todos/TodoActions'


export default function App() {
	const [todos, setTodos] = useState([])

	const addTodoHandler = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4()
		}
		setTodos([...todos, newTodo])
	}

	const deleteTodoHandler = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	const toggleTodoHandler = (id) => {
		setTodos(todos.map(todo => {
			return todo.id === id
				? { ...todo, isCompleted: !todo.isCompleted }
				: { ...todo }
		}))
	}

	const resetTodosHandler = () => {
		setTodos([])
	}

	const deleteCompletedTodosHandler = () => {
		setTodos(todos.filter(todo => !todo.isCompleted))
	}

	const completedTodosCount = todos.filter(todo => todo.isCompleted).length

	return (
		<>
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />

			{(!!todos.length) &&
				(<TodoActions
					resetTodos={resetTodosHandler}
					deleteCompletedTodos={deleteCompletedTodosHandler}
					completedTodosExist={!!completedTodosCount}
				/>)}

			<TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
			{completedTodosCount > 0 &&
				<div>Completed: {completedTodosCount}	{completedTodosCount > 1 ? ' todos' : ' todo'}</div>}
		</>
	)
}