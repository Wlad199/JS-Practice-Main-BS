import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./counterSlice"



export default function Counter() {

	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()



	return (
		<div>
			<div>
				<button
					onClick={() => dispatch(increment())}>
					Increase
				</button>

				<span>{count}</span>

				<button
					onClick={() => dispatch(decrement())}>
					Decrease
				</button>
			</div>
		</div>
	)
}