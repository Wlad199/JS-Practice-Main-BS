import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewTodo } from "../store/todoSlice"



const AddTodo = () => {

	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const addTodoHandler = () => {
		dispatch(addNewTodo(value))
		setValue('')
	}

	return (
		<div>
			<input
				type="text"
				placeholder="new todo"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button onClick={addTodoHandler}>Add todo</button>
		</div>
	)
}

export default AddTodo
