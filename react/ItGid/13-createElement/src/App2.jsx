import React from 'react'


export default function App() {

	const title = React.createElement('h1', {}, 'This is Title')
	const title2 = React.createElement('h2', {
		'style': {
			'color': 'red',
			'background': 'green'
		},
		'className': 'block _active'
	}, 'This is Subtitle')

	const span = React.createElement('span', {}, 'this is span')
	const div = React.createElement('div', {}, span)

	return (
		<>
			{title}
			{title2}
			{div}
		</>
	)
}