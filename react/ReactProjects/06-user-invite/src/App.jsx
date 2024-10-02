//import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

import Users from './Components/Users/Users'
import axios from 'axios'
import Success from './Components/Success'



export default function App() {

	const [users, setUsers] = useState([])
	const [isLoading, setLoading] = useState(true)
	const [searchValue, setSearchValue] = useState('')
	const [invites, setInvites] = useState([])
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		axios('https://reqres.in/api/users')
			.then(res => setUsers(res.data.data))
			.catch(err => alert(err))
			.finally(() => setLoading(false))
	}, [])

	const searchHandler = (e) => {
		setSearchValue(e.target.value)
	}

	const inviteHandler = (id) => {
		if (invites.includes(id)) {
			setInvites(invites.filter(_id => (id !== _id)))
		} else {
			setInvites([...invites, id])
		}
	}

	const sendInvitesHandler = () => {
		setSuccess(true)
	}


	return (
		<div className='container'>
			{success
				? <Success invites={invites} />
				: <Users
					users={users}
					isLoading={isLoading}
					searchHandler={searchHandler}
					searchValue={searchValue}
					inviteHandler={inviteHandler}
					invites={invites}
					sendInvitesHandler={sendInvitesHandler}
				/>
			}
		</div>
	)
}