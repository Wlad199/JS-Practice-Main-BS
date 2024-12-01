//import classNames from 'classnames'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Home, Blog, Layout, Notfound, Singlepage, EditPost } from './components/index'

export default function App() {

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='blog' element={<Blog />} />
				<Route path='blog/:id' element={<Singlepage />} />
				<Route path='blog/:id/edit' element={<EditPost />} />
				<Route path='*' element={<Notfound />} />
			</Route>
		</Routes>
	)
}