import React, { useReducer } from 'react'

const increment = (payload) => ({
	type: 'increment',
	payload
})
const decrement = (payload) => ({
	type: 'decrement',
	payload
})

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment': {
			return {
				counter: state.counter + action.payload
			}
		}
		case 'decrement': {
			return {
				counter: state.counter - action.payload
			}
		}
		default:
			return { ...state }
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, {
		counter: 1
	})

	return (
		<>
			<button onClick={() => dispatch(decrement(2))}>-2</button>
			<button onClick={() => dispatch(decrement(1))}>-1</button>

			<div>{state.counter}</div>

			<button onClick={() => dispatch(increment(1))}>1</button>
			<button onClick={() => dispatch(increment(2))}>2</button>
		</>
	)
}