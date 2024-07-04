import React from 'react'


//? Тег р появится только когда в инпут веедут что-то =================//

//export default class App extends React.Component {
//	constructor(props) {
//		super(props)
//		this.state = {
//			value: ''
//		}
//	}

//	showValue = (e) => {
//		this.setState({
//			value: e.target.value
//		})
//	}

//	render() {
//		let a = ''
//		if (this.state.value) {
//			a = <p>Your text: {this.state.value}</p>
//		} else {
//			a = ''
//		}
//		return (
//			<>
//				<form action="#">
//					<input onChange={this.showValue} />
//					{/*<p>{this.state.value}</p>*/}
//					{a}
//				</form>
//			</>
//		)
//	}
//}


//? Несколько инпутов с одинаковой функцией-обработчиком и разными именами  =================//

//export default class App extends React.Component {
//	constructor(props) {
//		super(props)
//		this.state = {
//			value: '',
//			text: '',
//			age: 0
//		}
//		this.submitForm = this.submitForm.bind(this)
//	}

//	showValue = (e) => {
//		this.setState({
//			[e.target.name]: e.target.value
//		})
//		console.log(e.target.value)
//		console.log(e.target.name)
//	}

//	submitForm(e) {
//		e.preventDefault()
//	}


//	render() {
//		let a = ''
//		if (this.state.value) {
//			a = <p>Your text: {this.state.value}</p>
//		} else {
//			a = ''
//		}
//		return (
//			<>
//				<form onSubmit={this.submitForm}>
//					<input onChange={this.showValue} type='text' name='value' />
//					<input onChange={this.showValue} type="number" name='age' />
//					<input type="submit" />
//					{a}
//					<p>Age: {this.state.age}</p>
//					<p>{this.state.text}</p>
//				</form>
//			</>
//		)
//	}
//}