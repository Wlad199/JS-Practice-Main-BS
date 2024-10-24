import { useDispatch } from "react-redux"
import { changeStatus, deleteTodo } from "./todoSlice"



export default function TodoItem({ todo }) {

	const dispatch = useDispatch()

	return (
		<li>
			<button onClick={() => dispatch(changeStatus(todo.id))}>
				{todo.isCompleted ? 'No completed' : 'completed'}
			</button>
			<span>{todo.text}</span>
			<button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
		</li>
	)
}