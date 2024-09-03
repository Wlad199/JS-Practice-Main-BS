import React, { useEffect, useState } from 'react'
import './index.scss'
import { Success } from './components/Success'
import { Users } from './components/Users'

/*
1. Получить список пользователей и отрисовать их (https://reqres.in/api/users)
2. Показать скелетоны до отрисовки пользователей (isLoading)
3. Сделать поисковик по именам и емейлам
4. Добавлать пользователей в массив ко клику на +
	Проверить есть ли в массиве уже пользователь: да - удалить, нет - добавить
	Менять иконку +- в зависимости от наличия пользователя в массиве
5. Показать кол-во добавленных пользователей и показать финальное окно




*/


export default function App() {

	const [users, setUsers] = useState([])
	const [isLoading, setLoading] = useState(true)
	const [searchValue, setSearchValue] = useState('')
	const [invites, setInvates] = useState([])
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then(res => res.json())
			.then(json => {
				setUsers(json.data)
			})
			.catch(error => {
				console.warn(error)
				alert('Users is not found!')
			})
			.finally(() => setLoading(false))
	}, [])

	const onChangeSearchValue = (e) => {
		setSearchValue(e.target.value)
	}

	const onClickInvite = (id) => {
		if (invites.includes(id)) {
			setInvates((prev) => prev.filter((_id) => _id !== id))
		} else {
			setInvates((prev) => [...prev, id])
		}
	}

	const onClickSendInvites = () => {
		setSuccess(true)
	}

	return (
		<div className="App">
			{(success)
				? <Success count={invites.length} />
				: <Users
					items={users}
					isLoading={isLoading}
					searchValue={searchValue}
					onChangeSearchValue={onChangeSearchValue}
					invites={invites}
					onClickInvite={onClickInvite}
					onClickSendInvites={onClickSendInvites}
				/>}
		</div>
	)
}