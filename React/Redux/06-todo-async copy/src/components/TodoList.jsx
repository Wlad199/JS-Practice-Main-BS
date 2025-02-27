import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"


export default function TodoList() {

	const todos = useSelector(state => state.todos.todos)
	console.log(todos)

	return (
		<>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</>
	)
}