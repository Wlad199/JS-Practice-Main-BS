//? Классовый подход ====================================================================================================//

/*
import React from 'react'

export default class DataLoader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}

	// componentDidMount применяется если нужно дождаться прлучения данных
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				console.log(data)
				this.setState({ data })
			})
	}

	render() {
		return (
			<>
				<ul>
					{this.state.data.map((elem) => {
						return <li key={elem.id}>{elem.name}</li>
					})}
				</ul>
			</>
		)
	}
}
*/


//? Функциональный подход  ====================================================================================================//

import React, { useEffect, useState } from 'react'


export default function DataLoader() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setData(data)
			})
	}, [])

	return (
		<>
			<ul>
				{data.map((elem) => {
					return <li key={elem.id}>{elem.name}</li>
				})}
			</ul>
		</>
	)
}