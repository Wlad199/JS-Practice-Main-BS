//import classNames from 'classnames'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Notfound from './pages/Notfound'
import Layout from './components/Layout'

export default function App() {

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='blog' element={<Blog />} />
					<Route path='*' element={<Notfound />} />
				</Route>
			</Routes>
		</>
	)
}