import React from "react";


//? Создайте блок, через inline стили присвойте ему цвет фона. Причем цвет должен случайно меняться при загрузке страницы.  =================//

export default class App extends React.Component {
	constructor(props) {
		super()
		this.state = {
			color: '#000'
		}
	}
	a = ''
	randomColor = () => {
		let a = +((Math.random() * ((999999 - 1000 + 1) + 1000)).toFixed(0))
		console.log(a)
		this.setState({
			color: `#${a}`
		})
	}

	render() {
		return (
			<>
				<button onClick={this.randomColor}>click</button>
				<div style={{ backgroundColor: this.state.color }}>ldskfbn</div>
			</>
		)
	}
}
