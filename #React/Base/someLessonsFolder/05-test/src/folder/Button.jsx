import React from 'react'
import './button.css'

export function Button() {
	return (
		<button type='submit' onClick={onClickHandler}>Button</button>
	)
}

function onClickHandler(event) {
	//event.preventDefault()
	console.log('click on button', event)
}

