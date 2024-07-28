import Todo from './Todo'
import styles from './TodoList.module.scss'

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
	if (!todos.length) {
		return <div>No tasks in todo list</div>
	}
	return (
		<ul className={styles.todoList}>
			{todos.map((todo) => {
				return (
					<Todo
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						toggleTodo={toggleTodo}
					/>)
			})}
		</ul>
	)
}