import React from 'react'

//	Между соседними компонентами
//	Данные между соседними компонентами, т.е. между компонентами на одном уровне, можно передать через общий предок.
//	Обычно данные от одного Реакт компонента передаются вверх, в компонент-предок, через callback-функцию,
//	а компонент-предок передает их в другой компонент через проп.

export default function SiblingToSibling() {
	const [value, setValue] = React.useState('')

	const handleChange = (value) => {
		setValue(value)
	}

	return (
		<div>
			<Sibling1 onChange={handleChange} />
			<Sibling2 value={value} />
		</div>
	)
}


function Sibling1({ onChange }) {

	const handleChange = (e) => {
		onChange(e.target.value)
	}

	return (
		<input onChange={handleChange} type="text" />
	)
}


function Sibling2({ value }) {
	return (
		<p>Curent Value: {value} </p>
	)
}