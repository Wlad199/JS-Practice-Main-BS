import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postSlice'
import Post from './Posts'


export default function PostsList() {

	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.posts)


	return (
		<>
			<button onClick={() => dispatch(getPosts())}>Get Posts</button>
			<ul>{posts.map(post => (
				<Post key={post.id} post={post} />
			))}</ul>
		</>
	)
}