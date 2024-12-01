import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'


export default function Notfound() {

	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			navigate('/')
		}, 2000);
	}, [])

	return (
		<>
			<h2>Notfound</h2>
		</>
	)
}