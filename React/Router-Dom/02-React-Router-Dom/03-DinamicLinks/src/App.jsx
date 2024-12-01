//import classNames from 'classnames'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Singlepage from './pages/Singlepage'
import Notfound from './pages/Notfound'
import Layout from './components/Layout'
import Createnewpost from './pages/Createnewpost'
import Editpost from './pages/Editpost'

export default function App() {

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='posts' element={<Blog />} />
				<Route path='posts/:id' element={<Singlepage />} />
				<Route path='posts/new' element={<Createnewpost />} />
				<Route path='posts/:id/edit' element={<Editpost />} />
				<Route path='*' element={<Notfound />} />
				<Route />
			</Route>
		</Routes>
	)
}