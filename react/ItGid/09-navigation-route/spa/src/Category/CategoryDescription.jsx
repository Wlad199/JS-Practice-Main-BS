import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


export default function CategoryDescription() {
	let { categoryId } = useParams()
	return (
		<div>
			<Link to="/cat">Назад</Link>
			<h1>Category: {categoryId}</h1>
		</div>
	)
}