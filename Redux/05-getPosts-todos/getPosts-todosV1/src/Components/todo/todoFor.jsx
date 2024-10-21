import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./todoSlice"

export default function TodoForm() {

	const [todoValue, setTodoValue] = useState('')


	const dispatch = useDispatch()

	const addTodoHandler = () => {
		const todo = {
			id: nanoid(),
			text: todoValue,
			completed: false
		}
		dispatch(addTodo(todo))
		setTodoValue('')
	}


	return (
		<>
			<form>
				<input
					type="text"
					placeholder="Text Todo"
					onChange={(e) => setTodoValue(e.target.value)}
					value={todoValue}
				/>
				<button
					type="button"
					onClick={addTodoHandler}
				>
					submit
				</button>
			</form>
		</>
	)
}