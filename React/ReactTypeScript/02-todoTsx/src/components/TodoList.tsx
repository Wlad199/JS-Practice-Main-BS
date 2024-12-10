import { ITodo } from "../types/data"
import TodoItem from "./TodoItem"

interface ITodoListProps {
	items: ITodo[]
	toggleTodo: (id: number) => void
	removeTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = ({ items, toggleTodo, removeTodo }) => {

	return (
		<div>
			{items.map(todo =>
				<TodoItem
					key={todo.id}
					{...todo}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
				/>
			)}
		</div>
	)
}

export default TodoList
