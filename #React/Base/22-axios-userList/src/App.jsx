import React, { useEffect, useState } from 'react'
import axios from "axios"

import { Users, AddUsers } from './Components/index.js'


export default function App() {

	const [list, setList] = useState(null)

	useEffect(() => {
		axios.get('http://localhost:3001/users')
			.then(res => setList(res.data))
			.catch(err => console.warn(err))
	}, [])

	console.log(list)

	return (
		<>
			{list ? <Users list={list} setList={setList} /> : 'Loading...'}
			<AddUsers list={list} setList={setList} />
		</>
	)
}