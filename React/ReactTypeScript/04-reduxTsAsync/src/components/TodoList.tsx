import { useAppSelector } from "../hook";
import TodoIem from './TodoItem'

const TodoList: React.FC = () => {

	const todos = useAppSelector(state => state.todo.todos)

	return (
		<ul>
			{todos.map(todo => (
				<TodoIem key={todo.id} {...todo} />
			))}
		</ul>
	)
}

export default TodoList
