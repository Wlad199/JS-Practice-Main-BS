import React from 'react'
import './style.css'

class Tasck extends React.Component {
	constructor(props) {
		super(props)
		this.showText = this.showText.bind(this)
		this.submitForm = this.submitForm.bind(this)
		this.state = {
			text: '',
			number: 0,
			range: 0,
			textarea: '',
			select: ''
		}
	}
	showText(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	submitForm(e) {
		e.preventDefault()
	}


	render() {
		return (
			<form onSubmit={this.submitForm}>
				<input onChange={this.showText} type="text" name='text' />
				<br />
				<input onChange={this.showText} type="number" name='number' />
				<br />
				<input onChange={this.showText} type="range" name="range" min={0} max={500} />
				<br />
				<textarea onChange={this.showText} type="textarea" name="textarea" cols='50' rows='6'></textarea>
				<br />
				<select onChange={this.showText} type="select" name="select">
					<option value="111">111</option>
					<option value="222">222</option>
					<option value="333">333</option>
				</select>
				<br />
				<input onClick={this.showText} type="submit" name="submit" />
				<p>You enter text: {this.state.text}</p>
				<p>You enter number: {this.state.number}</p>
				<p>You enter range: {this.state.range}</p>
				<p>You enter textarea: {this.state.textarea}</p>
				<p>You enter select: {this.state.select}</p>
			</form>
		)
	}
}

export { Tasck } 