import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Category from './Category/Category'
import CategoryDescription from './Category/CategoryDescription'
import Error from './Error'


export default function App() {


	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/cat' element={<Category />} />
					<Route path='/cat/:categoryId' element={<CategoryDescription />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	)
}

