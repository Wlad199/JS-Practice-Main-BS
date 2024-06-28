import React from 'react'

const UserName = (props) => {
	const onClick = () => {
		props.changeName(props.user.id, 'Admin')
	}
	return (
		(props.user.age > 18) ? (
			<p>{props.user.name} is {props.user.age} years old
				<button onClick={onClick}>Change Name</button>
			</p>
		) : (
			<p>{props.user.name} is {props.user.age} years old</p>
		)
	)
}

export default UserName