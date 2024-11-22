import { useSelector } from "react-redux"



export default function Content() {


	const userName = useSelector(state => state.users.data.name)
	const userSurName = useSelector(state => state.users.data.surName)

	return (
		<>
			<div>
				<span>Name:</span>
				<span>{userName}</span>
			</div>
			<div>
				<span>SurName:</span>
				<span>{userSurName}</span>
			</div>
		</>
	)
}