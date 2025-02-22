import { defineStore } from "pinia"
import type { ITodo } from "../types/todo.ts";
import { nanoid } from "nanoid";

export const useTodoStore = defineStore('todoStore', {
	state() {
		return {
			todos: <ITodo[]>[]
		}
	},
	actions: {
		addNewTodo(inputValue: string) {
			if (inputValue.length > 0) {
				this.todos.push({
					id: nanoid(),
					text: inputValue,
					isCompleted: false
				})
			}
		},
		deleteTodo(id: string) {
			this.todos = this.todos.filter(todo => todo.id !== id)
		},
		changeStatus(id: string): void {
			const currentTodo = this.todos.find(todo => todo.id === id)
			if (currentTodo) {
				currentTodo.isCompleted = !currentTodo.isCompleted
			}
		}
	}
})

