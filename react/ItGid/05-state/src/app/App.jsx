import React from 'react'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Navigation',
			subtitle: 'Main menu'
		}
	}
	showNav = () => {
		this.setState({ subtitle: 'Menu is unavailable' })
	}
	render() {
		return <div>
			<h1>{this.state.title}</h1>
			<h2>{this.state.subtitle}</h2>
			<button onClick={this.showNav}>Close Menu</button>
		</div>
	}
}
