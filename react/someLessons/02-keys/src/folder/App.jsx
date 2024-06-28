import React from 'react'

const Users = [
	{name: 'Alex', surname: 'Smit', age: 89},
	{name: 'Jhon', surname: 'Munch', age: 29},
	{name: 'Bob', surname: 'Gerd', age: 10},
	{name: 'Alex', surname: 'Lonh', age: 36}
]

const App = ()=>{
	return (
		<div>
			{Users.map((obj)=>{
				const key = generateKey(obj)
				return (
					<p key={key}>{obj.name}</p>
				)
			})}
		</div>
	)
}

function generateKey(user) {
	return `${user.name}_${user.surname}_${user.age}`
}

export default App
