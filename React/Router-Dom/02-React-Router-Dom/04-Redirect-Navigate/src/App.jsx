//import classNames from 'classnames'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Notfound from './pages/Notfound'
import Singlepage from './pages/Singlepage'
import Editpost from './pages/EditPost'

export default function App() {

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='about-us' element={<Navigate to='/about' replace />} />
				<Route path='posts' element={<Blog />} />
				<Route path='posts/:id' element={<Singlepage />} />
				<Route path='posts/:id/edit' element={<Editpost />} />
				<Route path='*' element={<Notfound />} />
			</Route>
		</Routes>
	)
}