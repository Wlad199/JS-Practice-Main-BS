import { toggleStatus, deleteTodo } from "../store/todoSlice";
import { useAppDispatch } from "../hook";

interface ITodoItemsProps {
	id: string,
	completed: boolean,
	title: string
}

const Todo: React.FC<ITodoItemsProps> = ({ title, id, completed }) => {

	const dispatch = useAppDispatch()


	return (
		<li>
			<button
				onClick={() => dispatch(toggleStatus(id))}
			>
				{completed ? 'complete' : 'in Process...'}
			</button>
			<span>{title}</span>
			<button
				onClick={() => dispatch(deleteTodo(id))}
			>
				delete
			</button>
		</li>
	)
}

export default Todo
