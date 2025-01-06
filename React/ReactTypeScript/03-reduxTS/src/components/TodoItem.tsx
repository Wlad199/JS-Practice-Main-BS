import { useAppDispatch } from '../hooks'
import { removeTodo, toggleTodo } from '../store/todoSlice';

interface ITodoItemProps {
	id: string;
	title: string;
	completed: boolean
}

const TodoItem: React.FC<ITodoItemProps> = ({ id, title, completed }) => {

	const dispatch = useAppDispatch()

	return (
		<li>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => dispatch(toggleTodo(id))}
			/>
			<span>{title}</span>
			<span onClick={() => dispatch(removeTodo(id))}></span>
		</li>
	)
}

export default TodoItem
