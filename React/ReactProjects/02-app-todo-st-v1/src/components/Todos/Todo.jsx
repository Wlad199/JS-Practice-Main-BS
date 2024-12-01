import styles from './Todo.module.scss'
import { RiTodoFill } from "react-icons/ri";

export default function Todo({ todo, deleteTodo, index }) {

	return (
		<li className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
			<RiTodoFill className={styles.iconTask} />
			<div className={styles.todoText}>{todo}</div>
		</li>
	)
}