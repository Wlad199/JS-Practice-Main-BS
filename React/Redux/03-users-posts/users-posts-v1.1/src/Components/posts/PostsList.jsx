import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from "./postSlice"
import { useEffect } from "react"
import PostsExcerpt from "./PostsExcerpt"

export default function PostsList() {

	const posts = useSelector(selectAllPosts)
	const postsStatus = useSelector(getPostsStatus)
	const error = useSelector(getPostsError)
	const dispatch = useDispatch()


	useEffect(() => {
		if (postsStatus === 'idle') {
			dispatch(fetchPosts())
		}
	}, [postsStatus, dispatch])

	//const renderPosts = posts
	//	.slice().sort((a, b) => b.date.localeCompare(a.date))
	//	.map(post => (
	//		<PostsExcerpt key={post.id} post={post} />
	//	))

	let content
	if (postsStatus === 'loading') {
		content = <p>Loading...</p>
		console.log('loading')
	} else if (postsStatus === 'succeeded') {
		console.log('succeeded')
		const orederdPosts = posts?.slice().sort((a, b) => b.date.localeCompare(a.date))
		content = orederdPosts.map(post => <PostsExcerpt key={post.id} post={post} />
		)
	} else if (postsStatus === 'failed') {
		console.log('failed')
		content = <p>{error}</p>
	}


	return (
		<>
			<h2>Posts</h2>
			{content}
		</>
	)
}