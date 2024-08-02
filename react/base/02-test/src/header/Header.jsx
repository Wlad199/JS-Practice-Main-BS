import React from 'react'
import logo from './logo.svg'
import './Header.css'

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header-wrapper">
					<p>This is Header</p>
					<img src={logo} className="App-logo" alt="logo" />
				</div>
			</header>
		)
	}
}

export default Header