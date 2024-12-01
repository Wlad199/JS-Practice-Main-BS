//import classNames from 'classnames'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function App() {

	const [searchParams, setSearchParams] = useSearchParams()
	const showActiveUsers = searchParams.get('filter') === 'active'

	console.log(useSearchParams())
	return (
		<>
			<button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
			<button onClick={() => setSearchParams({})}>Reset Users</button>
			{showActiveUsers ? <p>Only Active Users</p> : <p>All Users</p>}
		</>
	)
}