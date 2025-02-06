import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const Posts = () => {

	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => console.log(setPosts(data)))
	}, [])

	return (
		<div>
			{
				posts?.map(post => (
					<Link key={post.id} to={`/posts/${post.id}`}>
						<li>{post.title}</li>
					</Link>
				))
			}
		</div>
	)
}

export default Posts
