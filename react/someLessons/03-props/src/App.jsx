import React from 'react'
import { generateKey } from './GenerateKey'
import UserName from './UserName'


const Users = [
	{ name: 'Alex', surname: 'Smit', age: 89 },
	{ name: 'Jhon', surname: 'Munch', age: 29 },
	{ name: 'Bob', surname: 'Gerd', age: 10 },
	{ name: 'Alex', surname: 'Lonh', age: 36 }
]


export const App = () => {
	return Users.map((user) => {
		const key = generateKey(user)
		return (
			//<p key={key}>{user.name} {user.surname} {user.age} years old</p>
			<div key={key}>
				<UserName
					userName={user.name}
					userAge={user.age}
				/>
			</div>
		)
	})
}
