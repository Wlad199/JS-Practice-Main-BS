import React from 'react'
import UserName from './folder/UserName'

let USERS = [
	{ id: 1, name: 'Alex', age: 18, passportId: 66 },
	{ id: 2, name: 'John', age: 58, passportId: 33 },
	{ id: 3, name: 'Bob', age: 15, passportId: 56 },
	{ id: 4, name: 'Bob', age: 11, passportId: 55 },
]

function App() {
	const [_, forceUpdate] = React.useReducer(x => x + 1, 0)
	const changeName = (id, newName) => {
		USERS = USERS.map((user) => {
			if (user.id === id) {
				return {
					id: user.id,
					name: newName,
					age: user.age,
					passportId: user.passportId
				}
			}
			return user
		})
		forceUpdate()
	}


	return USERS.map((user, index) => {
		return (
			<UserName key={index}
				user={user}
				changeName={changeName}
			/>
		)
	})

}


export default App