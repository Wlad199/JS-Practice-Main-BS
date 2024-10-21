import { useDispatch } from 'react-redux'
import { getData } from './usersSlice'
import { useState } from 'react'


export default function Form() {

	const dispatch = useDispatch()

	const [name, setName] = useState('')
	const [surName, setSurName] = useState('')

	const sendForm = () => {
		const data = {
			name,
			surName
		}
		dispatch(getData(data))
		setName('')
		setSurName('')
	}

	return (
		<>
			<input
				onChange={(e) => setName(e.target.value)}
				type="text"
				placeholder="Name"
				value={name}
			/>
			<input
				onChange={(e) => setSurName(e.target.value)}
				type="text"
				placeholder="SurName"
				value={surName}
			/>
			<button onClick={sendForm}>Send</button>
		</>
	)
}