import { useEffect } from "react"
import { useState } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom'



export default function Singlepage() {

	const [post, setPost] = useState({})
	const { id } = useParams()

	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const goHome = () => navigate('/')

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data))
	}, [id])

	return (
		<div>
			{post && (
				<>
					<h2>{id}</h2>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
					<button onClick={goBack}>Back to Blog</button>
					<button onClick={goHome}>Back Home</button>
					<Link to={`/blog/${id}/edit`}>Edit Post</Link>
				</>
			)}
		</div>
	)
}