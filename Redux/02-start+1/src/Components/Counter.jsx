import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterClice'
import { useState } from 'react'


export default function Counter() {

	const count = useSelector(state => state.counter.value)
	const dispatch = useDispatch()
	const [incrementAccount, setIncrementAccount] = useState(0)

	const addValue = Number(incrementAccount) || 0

	const resetAll = () => {
		setIncrementAccount(0)
		dispatch(reset())
	}

	return (
		<>
			<p>{count}</p>
			<button onClick={() => dispatch(increment())}>+++</button>
			<button onClick={() => dispatch(decrement())}>---</button>
			<br />
			<input type="text" value={incrementAccount} onChange={(e) => setIncrementAccount(e.target.value)} />
			<div>
				<button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
				<button onClick={() => dispatch(resetAll)}>Reset</button>
			</div>
		</>
	)
}