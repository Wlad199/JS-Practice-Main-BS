import { useSelector, useDispatch } from "react-redux"
import { selectAllposts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice"
import { useEffect } from "react"
import PostsExcept from "./PostsExcept"

export default function PostsList() {

	const dispatch = useDispatch()
	const posts = useSelector(selectAllposts)
	const postsStatus = useSelector(getPostsStatus)
	const error = useSelector(getPostsError)

	console.log(postsStatus)

	useEffect(() => {
		if (postsStatus === 'idle') {
			dispatch(fetchPosts())
		}
	}, [postsStatus, dispatch])

	console.log(posts)


	let content
	if (postsStatus === 'loading') {
		content = <p>Loading...</p>
	} else if (postsStatus === 'succeeded') {
		const orderedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))
		content = orderedPosts.map(post => (
			<PostsExcept key={post.id} post={post} />
		))
	} else if (postsStatus === 'failed') {
		content = <p>{error}</p>
	}

	return (
		<section>
			<h2>Posts</h2>
			{content}
		</section>
	)
}