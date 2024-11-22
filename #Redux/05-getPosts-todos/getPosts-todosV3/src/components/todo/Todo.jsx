import { useDispatch } from "react-redux"
import { changeStatus, deleteTodo } from "./todoSlice"



export default function Todo({ todo }) {

	const dispatch = useDispatch()

	return (
		<>
			<button onClick={() => dispatch(changeStatus(todo.id))} >
				{todo.completed ? 'Completed' : 'Continue'}
			</button>
			<span>{todo.text}</span>
			<button onClick={() => dispatch(deleteTodo(todo.id))}>
				delete
			</button>
		</>
	)
}