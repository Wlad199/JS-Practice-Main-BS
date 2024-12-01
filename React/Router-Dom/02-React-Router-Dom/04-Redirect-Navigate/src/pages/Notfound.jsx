import { useEffect } from "react"
import { useNavigate } from "react-router"



export default function Notfound() {

	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			navigate('/')
		}, 1000);
	}, [])

	return (
		<>
			<h2>Notfound</h2>
		</>
	)
}