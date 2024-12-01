import { useDispatch, useSelector } from 'react-redux'
import { addName, addSurName } from './usersSlice'


export default function Form() {

	const dispatch = useDispatch()


	return (

		<form>
			<input
				type="text"
				placeholder='Name'
				onChange={(e) => {
					dispatch(addName(e.target.value))
				}}
			/>
			<input
				type="text"
				placeholder='SurName'
				onChange={(e) => {
					dispatch(addSurName(e.target.value))
				}}
			/>
		</form>
	)
}