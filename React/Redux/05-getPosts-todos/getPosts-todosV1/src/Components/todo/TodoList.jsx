import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { allTodos } from "./todoSlice";



export default function TodoList() {

	const todos = useSelector(allTodos)


	return (
		<ul>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	)
}