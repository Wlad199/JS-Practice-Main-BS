import Todo from './Todo'
import styles from './TodoList.module.scss'

export default function TodoList({ todos, deleteTodo }) {
	if (!todos.length) {
		return <div>No tasks in todo list</div>
	}
	return (
		<ul className={styles.todoList}>
			{todos.map((todo, index) => {
				return (
					<Todo
						key={index}
						todo={todo}
						deleteTodo={deleteTodo}
						index={index}
					/>)
			})}
		</ul>
	)
}