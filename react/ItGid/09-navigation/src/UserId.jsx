import { useParams } from "react-router"
//import { useParams } from "react-router-dom"


const UserId = () => {
	let { userName } = useParams()
	return (
		<div>
			<a href="/users">back</a>
			<h1>User: {userName}</h1>
		</div>
	)
}

export default UserId