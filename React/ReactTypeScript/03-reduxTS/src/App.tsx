import { useState } from "react"
import { useAppDispatch } from "./hooks"
import NewTodoForm from "./components/NewTodoForm"
import { addTodo } from "./store/todoSlice"
import TodoList from "./components/TodoList"



const App = () => {

	const [text, setText] = useState('')
	const dispatch = useAppDispatch()

	const handleAction = () => {
		dispatch(addTodo(text))
		setText('')
	}

	return (
		<div>
			<NewTodoForm
				value={text}
				updateText={setText}
				handleAction={handleAction}
			/>
			<TodoList />
		</div>
	)
}

export default App
