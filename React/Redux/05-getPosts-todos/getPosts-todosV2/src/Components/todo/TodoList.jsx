import { useSelector } from "react-redux"
import PostItem from './TodoItem'
import { nanoid } from "@reduxjs/toolkit"


export default function TodoList() {

	const todos = useSelector(state => state.todo.todos)


	return (
		<ul>
			{todos.map(todo => (
				<PostItem key={nanoid()} todo={todo} />
			))}
		</ul>
	)
}