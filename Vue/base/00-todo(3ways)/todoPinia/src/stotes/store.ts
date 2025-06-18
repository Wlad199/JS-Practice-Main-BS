import { defineStore } from "pinia"
import { ref } from 'vue'
import type ITodo from "@/types/todos"
import { nanoid } from "nanoid"


export const useTodoStore = defineStore('todoStore', () => {
	const todos = ref<ITodo[]>([])

	const addTodo = (inputValue: string) => {
		if (inputValue.length > 0) {
			todos.value.push({
				id: nanoid(),
				text: inputValue,
				isComplete: false
			})
		}
	}

	const deleteTodo = (id: string) => {
		todos.value = todos.value.filter(todo => todo.id !== id)
	}

	const changeStatus = (id: string) => {
		const currentTodo = todos.value.find(todo => todo.id === id)
		if (currentTodo) {
			currentTodo.isComplete = !currentTodo.isComplete
		}
	}

	return {
		todos,
		addTodo,
		deleteTodo,
		changeStatus
	} as const
})