import styles from './TodoForm.module.scss'
import { useState } from 'react'


export default function TodoForm({ addTodo }) {

	const [text, setText] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		addTodo(text)
		setText('')
	}

	return (
		<form onSubmit={submitHandler} className={styles.todoForm}>
			<input
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Enter new todo"
			/>
			<button type='submit'>Submit</button>
		</form>
	)
}