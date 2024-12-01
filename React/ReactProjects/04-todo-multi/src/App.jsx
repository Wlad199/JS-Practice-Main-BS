import React, { useState, useEffect } from 'react'
import { Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import BD from './assets/db.json'
import { List, Tasks } from './Components/index.js'



export default function App() {

	// Добавить новое свойство в объект
	const [lists, setLists] = useState(null)
	const [activeItem, setActiveItem] = useState(null)
	let history = useNavigate()
	let location = useLocation()



	useEffect(() => {
		//axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks')
		axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks')
			.then(({ data }) => {
				setLists(data)
			})
	}, [])

	// Добавить список задач
	const onAddList = (obj) => {
		const newList = [...lists, obj]
		setLists(newList)
	}

	// Удалить список задач
	const removeHandler = (id) => {
		if (window.confirm('Удалить задачу?')) {
			axios.delete('http://localhost:3001/lists/' + id).then(() => {
				const newLists = lists.filter(item => item.id !== id)
				setLists(newLists)
			})
		}
	}

	// Изменить название списка задач
	const onEditListTitle = (id, title) => {
		const newList = lists.map(item => {
			if (item.id === id) {
				item.name = title
			}
			return item
		})
		setLists(newList)
	}

	// Добавить новую задачу
	const onAddTask = (listId, taskObject) => {
		const newList = lists.map(item => {
			if (item.id === listId) {
				item.tasks = [...item.tasks, taskObject]
			}
			return item
		})
		setLists(newList)
	}

	useEffect(() => {
		const listId = location.pathname.split('lists/')[1]
		if (lists) {
			const list = lists.find((list) => listId === list.id)
			setActiveItem(list)
			console.log(activeItem)
		}
	}, [lists, location.pathname])


	return (
		<div className='todo'>
			{lists && <List
				colors={BD.colors}
				lists={lists}
				onAddList={onAddList}
				removeHandler={removeHandler}
				history={history}
				onClickItem={item => {
					//setActiveItem(item)
					history(`/lists/${item.id}`)
				}}
				activeItem={activeItem}
			/>}

			<div className='tasks-list'>
				<Routes>
					<Route path='/'
						element={lists &&
							lists.map(list => (
								< Tasks key={list.id} list={list} onEditTitle={onEditListTitle} onAddTask={onAddTask} />))}
					/>
				</Routes>
			</div>
		</div>
	)
}