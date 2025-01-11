import { useDispatch } from "react-redux";
import { ITodo, deleteTodo, toggleStatus } from "../store/todoSlice";


const TodoItem: React.FC<ITodo> = ({ id, completed, text }) => {

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
