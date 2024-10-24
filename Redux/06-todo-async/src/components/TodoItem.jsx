import { useDispatch } from "react-redux"
import { changeStatusById, deleteTodoById } from "./todoSlice"



export default function TodoItem({ todo }) {

	const dispatch = useDispatch()

	return (
		<li>
			<button onClick={() => dispatch(changeStatusById(todo.id))}>
				{todo.completed ? 'No completed' : 'completed'}
			</button>
			<span>{todo.title}</span>
			<button onClick={() => dispatch(deleteTodoById(todo.id))}>delete</button>
		</li>
	)
}