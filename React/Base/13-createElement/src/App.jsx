import React, { useRef, useState } from 'react'


export default function App() {

	const h1 = React.createElement('h1', {}, 'unit_08')
	const h2 = React.createElement('h2', {
		'style': {
			'color': 'orange'
		},
		'className': 'text-orange'
	}, 'header2')


	const inputRef = useRef()
	const [listItem, setListItem] = useState([])
	const input = React.createElement('input', { ref: inputRef })

	// Кнопка с ф-ей обработчиком
	const button = React.createElement('button', { onClick: () => clickHandler() }, 'button')


	function clickHandler() {
		const value = inputRef.current.value
		if (value) {
			setListItem([...listItem, value])
			inputRef.current.value = ''
		}
	}

	return (
		<>
			{h1}
			{h2}
			<div>
				{input}
				{button}
				<ul>
					{listItem.map((elem, index) => {
						return <li key={index}>{elem}</li>
					})}
				</ul>
			</div>
		</>
	)
}