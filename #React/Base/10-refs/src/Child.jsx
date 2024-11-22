import React, { useState } from 'react'


export default function Child(props) {

	return (
		<>
			<div>
				<h3>Child</h3>
				<p>{props.p1}</p>
			</div>
		</>
	)
}