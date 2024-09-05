import React, { useState } from 'react'
import List from './Components/List/List'

import Tasks from './Components/Tasks/Tasks'
import BD from './assets/db.json'



export default function App() {

	// Добавить новое свойство в объект
	const [lists, setLists] = useState(BD.lists.map(item => {
		item.color = BD.colors.filter(
			color => color.id === item.colorId
		)[0].name
		return item
	}))

	// Добавить задачу
	const onAddList = (obj) => {
		const newList = [...lists, obj]
		setLists(newList)
	}

	// Удалить задачу
	const removeHandler = (id) => {
		if (window.confirm('Удалить задачу?')) {
			const newList = lists.filter(item => {
				return item.id !== id
			})
			setLists(newList)
		}
	}

	return (
		<div className='todo'>
			<List
				colors={BD.colors}
				lists={lists}
				onAddList={onAddList}
				removeHandler={removeHandler}
			/>
			<Tasks />
		</div>
	)
}