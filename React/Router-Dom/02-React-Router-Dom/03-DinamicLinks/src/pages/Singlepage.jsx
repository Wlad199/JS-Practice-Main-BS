import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"


export default function Singlepage() {
	// useParams возвращает объект из to (<Link to={`/posts/${post.id}`}/>)
	const { id } = useParams()
	const [post, setPost] = useState({})

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data))
	}, [id])


	return (
		<div>
			{post && (
				<>
					<h2>{post.title}</h2>
					<br />
					<div>{post.body}</div>
					<Link to={`/posts/${id}/edit`} >Edit this post</Link>
				</>
			)}
		</div>
	)
}