import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BD from './assets/db.json'
import { List, Tasks } from './Components/index.js'



export default function App() {

	// Добавить новое свойство в объект
	const [lists, setLists] = useState(null)

	// Добавить задачу
	const onAddList = (obj) => {
		const newList = [...lists, obj]
		setLists(newList)
	}

	// Удалить задачу
	const removeHandler = (id) => {
		if (window.confirm('Удалить задачу?')) {
			axios.delete('http://localhost:3001/lists/' + id).then(() => {
				const newLists = lists.filter(item => item.id !== id)
				setLists(newLists)
			})
		}
	}

	useEffect(() => {
		axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks')
			.then(({ data }) => {
				setLists(data)
			})
	}, [])

	return (
		<div className='todo'>
			{lists && <List
				colors={BD.colors}
				lists={lists}
				onAddList={onAddList}
				removeHandler={removeHandler}
			/>}
			{lists && <Tasks list={lists[0]} />}

		</div>
	)
}