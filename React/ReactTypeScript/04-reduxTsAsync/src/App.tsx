import { useEffect } from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import { useAppDispatch, useAppSelector } from "./hook"
import { fetchTodos } from "./store/todoSlice"



const App = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchTodos())
	}, [dispatch])

	const { loading, error } = useAppSelector(state => state.todo)

	return (
		<div>
			<AddTodo />
			{loading && <h3>LOADING...</h3>}
			{error && <h3>{error}</h3>}
			<TodoList />
		</div>
	)
}

export default App
