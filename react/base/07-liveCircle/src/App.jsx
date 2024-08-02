import React from 'react'
import App2 from './App2'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			s1: '',
			s2: '',
			s3: ''
		}
	}

	static getDerivedStateFromProps(props, state) {
		return {
			s1: props.a1,
			s2: props.a2
		}
	}

	componentDidMount() {
		this.setState({
			s3: this.state.s1 * this.state.s2
		})
	}


	render() {

		return (
			<>
				<p>{this.state.s1}</p>
				<p>{this.state.s2}</p>
				<p>{this.state.s3}</p>
				<App2 z1={this.state.s3} />
			</>
		)
	}
}