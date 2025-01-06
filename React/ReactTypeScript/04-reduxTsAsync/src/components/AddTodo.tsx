import { useState } from "react"
import { useAppDispatch } from "../hook";
import { addNewTodo } from "../store/todoSlice";


const AddTodo: React.FC = () => {

	const [inputValue, setInputValue] = useState('')
	const dispatch = useAppDispatch()

	const addTodoHandler = () => {
		dispatch(addNewTodo(inputValue))
		setInputValue('')
	}


	return (
		<div>
			<input
				type="text"
				placeholder="new Todo"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={addTodoHandler}>Add Todo</button>
		</div>
	)
}

export default AddTodo