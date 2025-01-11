import { useDispatch } from "react-redux"
import { deleteTodo, toggleStatus } from "../../store/todoSlice"



const TodoItem = ({ todo }) => {

	const { text, id, completed } = todo

	const dispatch = useDispatch()

	return (
		<li>
			<button
				onClick={() => dispatch(toggleStatus(id))}
			>
				{completed ? 'true' : 'false'}
			</button>
			<span>{text}</span>
			<button
				onClick={() => dispatch(deleteTodo(id))}
			>
				delete
			</button>
		</li>
	)
}

export default TodoItem
