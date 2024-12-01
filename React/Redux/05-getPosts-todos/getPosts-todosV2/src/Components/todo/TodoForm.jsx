import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'
import { nanoid } from '@reduxjs/toolkit'


export default function TodoForm() {

	const dispatch = useDispatch()

	const [inputValue, setInputValue] = useState('')

	const formHandler = () => {
		const todo = {
			id: nanoid(),
			content: inputValue,
			status: true
		}
		dispatch(addTodo(todo))
		setInputValue('')
	}



	return (
		<>
			<input
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				type="text"
				placeholder="New Todo"
			/>
			<button onClick={formHandler}>Submit</button>
		</>
	)
}