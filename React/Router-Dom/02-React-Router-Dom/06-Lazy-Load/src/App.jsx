//import classNames from 'classnames'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Blog from './pages/Blog'
import Home from './pages/Home'
//import About from './pages/About'

// Вызвать динамический импорт
const LazyAbout = React.lazy(() => import('./pages/About.jsx'))

export default function App() {

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				{/*
				 Обернуть <LazyAbout /> в <React.Suspense>
					fallback={'...Loading'} Заглушка до отрисовки LazyAbout
				*/}
				<Route path='about' element={
					<React.Suspense fallback={'...Loading'}>
						<LazyAbout />
					</React.Suspense>
				} />

				<Route path='posts' element={<Blog />} />
			</Route>
		</Routes>
	)
}