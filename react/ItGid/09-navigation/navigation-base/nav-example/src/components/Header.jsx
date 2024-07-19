import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Category from './Category'
import Notfound from './Notfound'
import UserId from './UserId'
import Users from './Users'

export default function Header() {

	return (
		<>
			<BrowserRouter>
				<header>
					<NavLink to='/'>Главная</NavLink>
					<NavLink to='/about'>О сайте</NavLink>
					<NavLink to='/category'>Категории</NavLink>
					<NavLink to='/users'>Пользователи</NavLink>
				</header>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/category' element={<Category />} />
					<Route path='/users' element={<Users />} />
					<Route path='/users/:userName' element={<UserId />} />
					<Route path='*' element={<Notfound />} />
				</Routes>

			</BrowserRouter>
		</>
	)
}

// Сделать навигацию
// Страницу 404