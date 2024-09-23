import React from 'react'
import { Route, Routes, NavLink } from "react-router-dom"

import Home from './Components/Home'
import Contacts from './Components/Contacts'

export default function App() {

	return (
		<>
			<nav>
				<ul>
					<li><NavLink to='/'>Home</NavLink></li>
					<li><NavLink to='/contacts'>Contacts</NavLink></li>
				</ul>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
		</>
	)
}