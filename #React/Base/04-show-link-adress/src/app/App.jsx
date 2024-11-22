import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'

class App extends React.Component {
	render() {
		return (
			<div className='Wrapper'>
				<h1>{this.props.title}</h1>
				<Nav nav={this.props.nav} />
				<Footer
					tel={this.props.tel}
					adress={this.props.adress}
				/>
			</div >
		)
	}
}

export default App