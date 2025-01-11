import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewTodo } from "../../store/todoSlice"



const AddTodo = () => {

	const [inputValue, setInputValue] = useState('')

	const dispatch = useDispatch()

	const addTodoHandler = () => {
		dispatch(addNewTodo(inputValue))
		setInputValue('')
	}

	return (
		<div>
			<input
				type="text"
				placeholder="new todo"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={addTodoHandler}>Add Todo</button>
		</div>
	)
}

export default AddTodo
