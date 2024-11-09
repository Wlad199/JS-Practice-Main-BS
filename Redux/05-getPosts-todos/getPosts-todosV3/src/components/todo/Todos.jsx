import { useSelector } from "react-redux"
import Todo from "./Todo"



export default function Todos() {

	const todos = useSelector(state => state.todo.todos)

	return (
		<ul>
			{todos?.map(todo =>
				<li key={todo.id}><Todo todo={todo} /></li>
			)}
		</ul>
	)
}