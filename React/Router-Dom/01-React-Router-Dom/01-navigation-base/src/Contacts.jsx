import React from 'react'

export default class Contacts extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<h1>Contacts</h1>
				<ul>
					<li><a href="/users/ivanov">Ivanov</a></li>
					<li><a href="/users/petrov">Petrov</a></li>
				</ul>
			</>
		)
	}
}