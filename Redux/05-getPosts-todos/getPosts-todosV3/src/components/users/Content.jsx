import { useSelector } from "react-redux"


export default function Content() {

	const user = useSelector(state => state.users)

	return (
		<>
			<div>
				<span>Name: </span>
				<span>{user.name}</span>
			</div>
			<div>
				<span>SurName: </span>
				<span>{user.userName}</span>
			</div>
		</>
	)
}