import React from 'react'


export default class CompClass extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			comment: []
		}
		this.handler = this.handler.bind(this)
		this.myRef = React.createRef()
	}
	handler() {
		let currentCount = this.state.count
		currentCount++
		this.setState({
			count: currentCount
		})
	}
	addComment = () => {
		let comment = this.myRef.current.value
		let comments = this.state.comment
		comments.push(comment)
		this.setState({
			'comments': comments
		})
		this.myRef.current.value = ''
	}

	render() {
		return (
			<>
				<h1>State</h1>
				<div>
					<p>
						{this.state.count % 2 === 0 ? 'even' : 'odd'}
					</p>
					<button onClick={this.handler}>Change State {this.state.count}</button>
				</div>
				<br />
				<textarea ref={this.myRef}></textarea>
				<div>
					<button onClick={this.addComment}>Add Comment</button>
				</div>
				<div>
					<ul>
						{this.state.comment.map((item, index) => {
							return <li key={index}>{item}</li>
						})}
					</ul>
				</div>
			</>
		)
	}
}