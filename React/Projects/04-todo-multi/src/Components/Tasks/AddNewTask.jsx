import { useState } from 'react'
import addSvg from '../../assets/img/add.svg'
import axios from 'axios'

export default function AddNewTask({ list, onAddTask }) {

	// Показ формы добавления новой задачи
	const [isActive, setActive] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const [isLoading, setIsLoading] = useState(false)


	const toggleFormVisible = () => {
		setActive(!isActive)
		setInputValue('')
	}


	const addTask = () => {
		const obj = {
			"listId": list.id,
			"text": inputValue,
			"completed": false
		}

		setIsLoading(true)

		axios.post('http://localhost:3001/tasks', obj)
			.then(({ data }) => {
				onAddTask(list.id, data)
				toggleFormVisible()
			})
			.catch(() => {
				alert('Ошибка при добавлении задачи')
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<div className='task-form'>
			{!isActive && (
				<div className="task-form__new">
					<button onClick={toggleFormVisible} className='tasks__button'>
						<img src={addSvg} alt="add task" />
						<span>Новая задача</span>
					</button>
				</div>
			)}
			{isActive && (
				<div className="task-form__add-form">
					<input
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						type="text"
						placeholder='Текст задачи'
						className='add-form__input' />
					<div className="add-form__buttons">
						<button onClick={addTask} className='add-form__button'>{isLoading ? 'Добавление...' : 'Добавить задачу'}</button>
						<button onClick={toggleFormVisible} className='add-form__button add-form__button_disabled'>Отмена</button>
					</div>
				</div>
			)}
		</div>
	)
}