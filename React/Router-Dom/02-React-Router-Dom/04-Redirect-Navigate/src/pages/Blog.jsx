import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"



export default function Blog() {

	const [posts, setPosts] = useState([])


	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))
	}, [])



	const post = posts.map(post => (
		<Link key={post.id} to={`/posts/${post.id}`}>
			<li>{post.title}</li>
		</Link>
	))

	return (
		<>
			<h1>Blog</h1>
			{post}
		</>
	)
}