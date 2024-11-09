import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPost, deletePostById } from "./postSlice"

function PostButton() {
	const dispatch = useDispatch()
	return (
		<>
			<button onClick={() => dispatch(fetchPost())}>Get Posts</button>
		</>
	)
}


export default function Posts() {

	const dispatch = useDispatch()

	const posts = useSelector(state => state.post.posts)
	const status = useSelector(state => state.post.status)
	const error = useSelector(state => state.post.error)
	console.log(status)

	if (status === 'pending') {
		return <div>LOADING...</div>
	} else if (status === 'rejected') {
		return <div>Server error: {error}</div>
	}


	return (

		<>
			<PostButton />
			<ul>
				{posts.map(post => (
					<li key={post.id}>
						<button
							onClick={() => dispatch(deletePostById(post.id))}
						>
							delete
						</button>
						<span>{post.title}</span>
					</li>
				))}
			</ul>
		</>
	)
}