import React from "react";

export default class App2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			y1: ''
		}
	}

	static getDerivedStateFromProps(props, state) {
		return {
			y1: props.z1
		}
	}

	render() {
		return (
			<p>{this.state.y1 * 10}</p>
		)
	}
}