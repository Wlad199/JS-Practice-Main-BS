import axios from 'axios'
import React from 'react'


export default function App() {



	axios.get('http://localhost:3001/lists?_expand=color')
		.then(res => console.log(res.data))

	return (
		<>

		</>
	)
}