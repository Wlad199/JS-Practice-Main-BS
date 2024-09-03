import React from 'react'
import List from './Components/List/List'

import Tasks from './Components/Tasks/Tasks'
import BD from './assets/db.json'



export default function App() {


	return (
		<div className='todo'>
			<List colors={BD.colors} lists={BD.lists} />
			<Tasks />
		</div>
	)
}