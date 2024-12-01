import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'



export default function Blog() {

	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))
	}, [])


	return (
		<>
			<h1>Blog</h1>
			{posts && posts.map(post => (
				<Link key={post.id} to={`/blog/${post.id}`}>
					<li>{post.title}</li>
				</Link>
			))}
		</>
	)
}