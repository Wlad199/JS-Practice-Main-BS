import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import About from './About'

export default function Header() {

	return (
		<>
			<BrowserRouter>
				<nav>
					<NavLink className={({ isActive }) => isActive ? '_active' : ''} to='/'>Главная</NavLink>
					<NavLink className={({ isActive }) => isActive ? '_active' : ''} to='/cat'>Категории</NavLink>
					<NavLink className={({ isActive }) => isActive ? '_active' : ''} to='/about'>О сайте</NavLink>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/cat' element={<Category />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}