import React from "react";

const USERS = [
	{ name: 'Alex', age: 18, id: 562 },
	{ name: 'John', age: 58, id: 552 },
	{ name: 'Bob', age: 15, id: 592 },
	{ name: 'Bob', age: 11, id: 762 },
]

const App = function () {
	return (
		<div>
			{USERS.map((user) => {
				const key = generateKey(user)
				return (
					<p key={key} > {key}</p>
				)
			})
			}
		</div >
	)
}

function generateKey(user) {
	return `${user.name}_${user.age}_${user.id}`
}

export default App;
