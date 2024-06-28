import React from 'react'

const UserName = (props) => {
	console.log(props)
	return (
		props.userAge > 18 ? (
			<div>
				<span>{props.userName} is {props.userAge} years old</span>
			</div>) : (
			<div>
				<span>{props.userName} is too young!!!</span>
			</div>
		)
	)
}

export default UserName