import React from 'react'
import { useParams } from "react-router"
import { Link } from 'react-router-dom'

export default function UserId() {

	let { userName } = useParams()
	return (
		<div>
			<Link to="/users">back</Link>
			<br />
			<br />
			<h1>User: {userName}</h1>
		</div>
	)
}