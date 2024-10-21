import { useSelector } from "react-redux"


export default function Content() {

	const name = useSelector(state => state.user.name)
	const surName = useSelector(state => state.user.surName)


	return (
		<div>
			<div>
				<span>Name: </span>
				<span>{name}</span>
			</div>
			<div>
				<span>SurName: </span>
				<span>{surName}</span>
			</div>
		</div>
	)
}