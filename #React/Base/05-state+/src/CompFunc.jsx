import React from 'react'
import { useState } from 'react'

export default function CompFunc() {
	const [count, setCount] = useState(0)
	const [comment, setComment] = useState([])

	function handler() {
		let currentCount = count
		currentCount++
		setCount(currentCount)
	}
	let myRef = React.createRef()
	function addComment() {
		let commentValue = myRef.current.value
		let comments = [...comment, commentValue]
		setComment(comments)
		myRef.current.value = ''
	}
	return (
		<>
			<br />
			<p>----------------------------------------</p>

			<h1>State</h1>
			<div>
				<div>{count % 2 === 0 ? 'even' : 'Odd'}</div>
				<button onClick={handler}>Change State {count}</button>
			</div>
			<br />
			<div>
				<textarea ref={myRef}></textarea>
				<div>
					<button onClick={addComment}>Add Comment</button>
				</div>
				<div>
					<ul>
						{comment.map((item, index) => {
							return <li key={index}>{item}</li>
						})}
					</ul>
				</div>
			</div>
		</>
	)
}