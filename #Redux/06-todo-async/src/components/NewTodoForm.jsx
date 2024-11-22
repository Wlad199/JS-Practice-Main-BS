import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addNewTodo } from './todoSlice'


export default function NewTodoForm() {

	const [inputText, setInputText] = useState('')
	const dispatch = useDispatch()

	const addTodoHandler = () => {
		dispatch(addNewTodo(inputText))
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
			<button onClick={addTodoHandler}>Add todo</button>
		</>
	)
}