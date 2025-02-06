import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Post } from "../store/postSlice"



const Singlepage = () => {

	const { id } = useParams()

	const [post, setPost] = useState<Post | null>(null)

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(data => setPost(data))
	}, [])

	console.log(post)

	return (
		<div>
			{post && (
				<>
					<p>{post.id}</p>
					<p>{post.title}</p>
					<p>{post.body}</p>
				</>
			)}
		</div>
	)
}

export default Singlepage
