import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, deletePostById } from './postSlice'


export default function Posts() {

	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.posts)
	const status = useSelector(state => state.posts.status)



	if (status === 'pending') {
		return <div>LOADING...</div>
	} else if (status === 'rejected') {
		return <div>404</div>
	}

	return (
		<div>
			<button
				type="button"
				onClick={() => dispatch(getPosts())}
			>
				Get Posts
			</button>
			<div>
				{posts.map(post => (
					<div key={post.id}>
						<p>
							{post.title}
						</p>
						<button onClick={() => dispatch(deletePostById(post.id))}>delete</button>
					</div>
				))}
			</div>
		</div>
	)
}