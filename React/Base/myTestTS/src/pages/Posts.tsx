import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hook"
import { fetchPosts } from "../store/postSlice"
import { Link } from "react-router-dom"



const Posts = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])


	const posts = useAppSelector(posts => posts.posts.posts)

	console.log(posts)



	return (
		<ul>
			{posts.map(post => (
				<Link key={post.id} to={`/posts/${post.id}`}>
					<li>{post.title}</li>
				</Link>
			))}
		</ul>
	)
}

export default Posts
