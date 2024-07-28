import React, { useState } from 'react'
import Counter from './Components/Counter'
import Button from './Components/Button'


export default function App() {

	const [count, setCount] = useState(0)

	const increaseCount = () => {
		setCount(count + 1)
	}

	return (
		<>
			<Counter count={count} />
			<br />
			<Button increaseCount={increaseCount} />
			<Button increaseCount={increaseCount} />
			<Button increaseCount={increaseCount} />
		</>
	)
}