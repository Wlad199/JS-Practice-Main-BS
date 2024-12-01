import { useParams } from 'react-router'

export default function EditPost() {

	const { id } = useParams()

	return (
		<div>
			Edit post {id}
		</div>
	)
}