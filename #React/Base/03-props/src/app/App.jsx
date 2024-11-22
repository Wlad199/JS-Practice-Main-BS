import React from 'react'
import './App.css'
import logo from './logo.svg'
import Nav from './nav/Nav'

class App extends React.Component {
	render() {
		let nav = this.props.nav
		return (
			<div className='wrapper'>
				<div className='container'>
					<img src={logo} alt="logo" />
					<p>header</p>
				</div>
				<p>{this.props.title}</p>
				< Nav nav={nav} />
			</div>
		)
	}
}

export default App
