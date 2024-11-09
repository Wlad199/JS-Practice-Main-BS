import { useDispatch } from "react-redux"
import { addName, addSurName } from "./userSlice"
import { useState } from "react"


export default function From() {

	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [surName, setSurName] = useState('')

	const submitHandler = () => {
		dispatch(addName(name))
		dispatch(addSurName(surName))
	}


	return (
		<form>
			<input
				type="text"
				placeholder="Name"
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="text"
				placeholder="SurName"
				onChange={(e) => setSurName(e.target.value)}
			/>
			<button type="button" onClick={submitHandler}>Submit</button>
		</form>
	)
}