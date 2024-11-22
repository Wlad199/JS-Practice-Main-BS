import { useDispatch } from 'react-redux'
import { changeStatus, deleteTodo } from './todoSlice'

export default function TodoItem({ todo }) {

	const dispatch = useDispatch()

	const toggleStatus = (id) => {
		dispatch(changeStatus(id))
	}


	return (
		<li>
			<button
				onClick={() => toggleStatus(todo.id)}
			>
				{todo.status ? 'work' : 'completed'}
			</button>
			<span>{todo.content}</span>
			<button
				onClick={() => dispatch(deleteTodo(todo.id))}
			>
				delete
			</button>
		</li>
	)
}