import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import About from './About'
import Contacts from './Contacts'
import UserId from './UserId'
import Error from './Error'


export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				{/* Для многостраничного сайта */}
				<Header />
				<BrowserRouter>
					{/* Для одностраничного сайта */}
					{/*<nav>
						<li><Link to='/'>Main Page</Link></li>
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/contacts'>Contacts</Link></li>
					</nav>*/}
					<Routes>
						<Route exact path="/" element={<Main />} />
						<Route path="/about" element={<About />} />
						<Route exact path="/users" element={<Contacts />} />
						<Route path="/users/:userName" element={<UserId />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</BrowserRouter>
			</>
		)
	}
}