import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export interface ITodo {
	id: string,
	text: string,
	completed: boolean
}

interface ITodoProps {
	list: ITodo[]
}

const initialState: ITodoProps = {
	list: []
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addNewTodo: (state, action: PayloadAction<string>) => {
			state.list.push({
				id: nanoid(),
				completed: false,
				text: action.payload
			})
		},
		toggleStatus: (state, action: PayloadAction<string>) => {
			const toggledTodo = state.list.find(todo => todo.id === action.payload)
			if (toggledTodo) {
				toggledTodo.completed = !toggledTodo.completed
			}
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.list = state.list.filter(todo => todo.id !== action.payload)
		}
	}
})

export const { addNewTodo, toggleStatus, deleteTodo } = todoSlice.actions
export default todoSlice.reducer