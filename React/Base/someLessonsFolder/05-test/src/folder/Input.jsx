import React from 'react'
import './input.css'

const Input = () => {
	return (
		<input type='text' onChange={onChangeHandler} />
	)
}


function onChangeHandler(event) {
	console.log(event.target.value)
}

export default Input