import React, { useState } from 'react'


export default function ButtonHook() {

	const [buttonText, setButtonText] = useState('click on me')
	return (
		<>
			<button onClick={
				() => { setButtonText('clicked') }}>{buttonText}</button>
		</>
	)
}