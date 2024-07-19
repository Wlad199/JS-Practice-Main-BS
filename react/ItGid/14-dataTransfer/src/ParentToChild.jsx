import React from 'react'


export default function ParentToChild() {
	const [value, setValue] = React.useState('')

	function handleChange(e) {
		setValue(e.target.value)
	}

	return (
		<div>
			<input onChange={handleChange} type="text" />
			<Child value={value} />
		</div>
	)
}

// Через пропсы передаем value
function Child(props) {
	return (
		<>
			<p>Curent Value: {props.value || ''}</p>
		</>
	)
}