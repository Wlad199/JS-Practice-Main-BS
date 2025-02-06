import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"



const Singlepage = () => {

	const { id } = useParams()

	const [post, setPost] = useState(null)

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data))
	}, [])

	return (

		<div>
			{post && (
				<>
					<p>{post.id}</p>
					<p>{post.title}</p>
					<p>{post.body}</p>
					<Link to={`/posts/${id}/edit`}>
						Edit this post
					</Link>
				</>
			)}
		</div>
	)
}

export default Singlepage
