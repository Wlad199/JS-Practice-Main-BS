import React from 'react'
import Button from './Button'
import Input from './Input'

const App = () => {
	return (
		<form onSubmit={(event) => {
			console.log('sumbit')
			event.preventDefault()
		}}>
			<Button />
			<Input />
		</form>
	)
}

export default App