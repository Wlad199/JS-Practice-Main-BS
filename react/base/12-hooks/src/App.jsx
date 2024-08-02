import React, { useState } from 'react'
import ButtonHook from './ButtonHook'
import DataLoader from './DataLoader'

export default function App() {

	const [buttonText, setButtonText] = useState('click on me')
	return (
		<>
			<ButtonHook />
			<DataLoader />
		</>
	)
}