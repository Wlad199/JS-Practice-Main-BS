import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri"
import { FaCheck } from "react-icons/fa"
import styles from './Todo.module.scss'
export default function Todo({ todo, deleteTodo, toggleTodo }) {

	return (
		<li className={`${styles.todo} ${todo.isCompleted ? styles.active : ''}`}>
			<RiTodoFill className={styles.iconTask} />
			<div className={styles.todoText}>{todo.text}</div>
			<RiDeleteBin2Line onClick={() => deleteTodo(todo.id)} className={`${styles.iconTask}  ${styles.iconDelete}`} />
			<FaCheck onClick={() => toggleTodo(todo.id)} className={`${styles.iconTask} ${styles.iconCheck}`} />
		</li>
	)
}