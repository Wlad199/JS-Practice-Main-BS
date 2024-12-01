import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'
import { nanoid } from "@reduxjs/toolkit"


export default function NewTodoForm() {

	const [inputText, setInputText] = useState('')
	const dispatch = useDispatch()


	const addTodoHandler = () => {

		const todo = {
			id: nanoid(),
			text: inputText,
			isCompleted: false
		}

		dispatch(addTodo(todo))
		setInputText('')
	}

	return (
		<>
			<input
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				type="text"
				placeholder="new todo"
			/>
			<button onClick={addTodoHandler} >Add todo</button>
		</>
	)
}