import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link, useNavigate } from "react-router-dom"


export default function Singlepage() {

	const { id } = useParams()

	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const goHome = () => navigate('/', { replace: true })
	const goBlog = () => navigate('/posts', { state: 123 })


	const [post, setPost] = useState({})

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data))
	}, [id])

	return (
		<div>
			<button onClick={goBack}>Go back</button>
			<button onClick={goHome}>Go Home</button>
			<button onClick={goBlog}>Go Blog</button>
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