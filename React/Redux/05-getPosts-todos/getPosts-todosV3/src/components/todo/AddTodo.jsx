import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from './todoSlice'



export default function AddTodo() {

	const [todoText, setTodoText] = useState('')
	const dispatch = useDispatch()

	const submitHandler = () => {
		const todo = {
			id: nanoid(),
			text: todoText,
			completed: false
		}
		if (todoText) {
			dispatch(addTodo(todo))
		}
		setTodoText('')
	}

	return (
		<>
			<input
				type="text"
				placeholder="Text Todo"
				onChange={(e) => setTodoText(e.target.value)}
				value={todoText}
			/>
			<button
				onClick={submitHandler}
			>
				submit
			</button>
		</>
	)
}