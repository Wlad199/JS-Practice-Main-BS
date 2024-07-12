import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Category from './Category/Category'
import CategoryDescription from './Category/CategoryDescription'
import Error from './Error'

const list1 = {
	nav: [
		{ "link": "/", "text": "Главная" },
		{ "link": "/about", "text": "О сайте" },
		{ "link": "/cat", "text": "Категории" },
	]
}

const list2 = {
	nav: [
		{ "link": "/cat/notebook", "text": "Ноутбуки" },
		{ "link": "/cat/monitor", "text": "Мониторы" },
		{ "link": "/cat/cellphone", "text": "Мобильные телефоны" },
	]
}


export default function App() {

	return (
		<>
			<BrowserRouter>
				<Header nav={list1.nav} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/cat' element={<Category nav={list2.nav} />} />
					<Route path='/cat/:categoryId' element={<CategoryDescription />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	)
}

