import { useDispatch } from 'react-redux'
import { changeStatus, deleteTodo } from './todoSlice'

export default function TodoItem({ todo }) {

	const dispatch = useDispatch()

	const toggleTodoHaandler = (id) => {
		dispatch(changeStatus(id))
	}



	return (
		<li className="todoItem">
			<button
				type='button'
				onClick={() => toggleTodoHaandler(todo.id)}>
				{todo.completed ? 'completed' : 'NO Completed'}
			</button>
			<span>{todo.text}</span>
			<button onClick={() => dispatch(deleteTodo(todo.id))} >delete</button>
		</li>
	)
}