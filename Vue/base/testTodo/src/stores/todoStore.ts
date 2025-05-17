import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { ITodo } from "../types/todo";
import { nanoid } from "nanoid";

export const useTodoStore = defineStore('todoStore', () => {
	const todos = ref<ITodo[]>([])
	const inputValue = ref('')
	const hideCompleted = ref(false)

	const addTodo = () => {
		todos.value.push({
			text: inputValue.value,
			id: nanoid(),
			completed: false
		})
		inputValue.value = ''
	}

	const deleteTodo = (id: string) => {
		todos.value = todos.value.filter(todo => todo.id !== id)
	}

	const filteredTodos = computed(() => {
		return hideCompleted.value
			? todos.value.filter(todo => !todo.completed)
			: todos.value
	})

	const toggleTodo = () => {
		hideCompleted.value = !hideCompleted.value
	}


	return {
		todos,
		inputValue,
		hideCompleted,

		addTodo,
		deleteTodo,
		filteredTodos,
		toggleTodo,
	} as const

})