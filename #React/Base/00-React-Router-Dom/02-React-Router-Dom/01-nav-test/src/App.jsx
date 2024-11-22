//import classNames from 'classnames'
import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Notfound from './components/Notfound'

export default function App() {

	return (
		<>
			<header>
				<Link to="/">Home</Link>
				<br />
				<Link to="about">About</Link>
				<br />
				<Link to='blog'>Blog</Link>
			</header>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='*' element={<Notfound />} />
			</Routes>
		</>
	)
}