import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { useEffect } from "react"
import { fetchTodos } from "./todoSlice"


export default function TodoList() {

	const todos = useSelector(state => state.todos.todos)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodos())
	}, [dispatch])

	return (
		<>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</>
	)
}