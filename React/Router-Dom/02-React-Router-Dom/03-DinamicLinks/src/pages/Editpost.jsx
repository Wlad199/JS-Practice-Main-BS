import { useParams } from "react-router"



export default function Editpost() {

	const { id } = useParams()

	return (
		<>
			<h1>Edit Post {id}</h1>
		</>
	)
}