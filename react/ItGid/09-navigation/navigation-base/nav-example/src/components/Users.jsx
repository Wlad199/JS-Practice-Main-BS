import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Users() {

	let url = useLocation()

	return (
		<ul>
			<li><Link to={`${url.pathname}/ivanov`}>Ivanov</Link></li>
			<li><Link to={`${url.pathname}/petrov`}>Petrov</Link></li>
		</ul>
	)
}