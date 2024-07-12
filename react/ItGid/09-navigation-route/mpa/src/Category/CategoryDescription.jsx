import { useParams } from 'react-router-dom';


export default function CategoryDescription() {
	let { categoryId } = useParams()
	console.log(useParams())
	return (
		<div>
			<a href="/cat">Назад</a>
			<h1>Category: {categoryId}</h1>
		</div>
	)
}