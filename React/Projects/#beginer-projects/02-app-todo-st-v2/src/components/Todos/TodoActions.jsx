import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import styles from './TodoActions.module.scss'
import Button from '../UI/Button'

export default function TodoActions({ resetTodos, deleteCompletedTodos, completedTodosExist }) {

	return (
		<>
			<Button title='Reset Todos'>
				<RiRefreshLine className={styles.iconAction} onClick={() => resetTodos()} />
			</Button>
			<Button
				title='Clear Completed Todos'
				onClick={deleteCompletedTodos}
				disabled={!completedTodosExist}
			//className={`${completedTodosExist ? styles.disabled : ''}`}
			>
				<RiDeleteBin2Line className={styles.iconAction} />
			</Button>
		</>
	)
}
