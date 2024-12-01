import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Blog() {

	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))
	}, [])

	return (
		<>
			<h1>Our News</h1>
			{posts.map(post => (
				<Link key={post.id} to={`/posts/${post.id}`}>
					<li>{post.title}</li>
				</Link>
			))}
		</>
	)
}