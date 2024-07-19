import React from 'react'


//	Если необходимо передать данные от дочернего реакт компонента к родительскому, 
//	используются функции обратного вызова (callback-функции).

export default function ChildToParent() {
	const [value, setValue] = React.useState('')

	function handleChange(value) {
		setValue(value)
	}

	return (
		<div>
			<Child onChange={handleChange} />
			<p>Curent Value: {value} </p>
		</div>
	)
}


function Child({ onChange }) {

	function handleChange(e) {
		onChange(e.target.value)
	}

	return (
		<input onChange={handleChange} type="text" />
	)
}