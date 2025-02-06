//import classNames from 'classnames'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import Singlepage from './pages/Singlepage'
import Editpost from './pages/Editpost'
import NotFound from './pages/NotFound'

export default function App() {

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='posts' element={<Posts />} />
				<Route path='posts/:id' element={<Singlepage />} />
				<Route path='posts/:id/edit' element={<Editpost />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}