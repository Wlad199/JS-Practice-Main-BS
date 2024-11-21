import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"
import TimeAgo from "./TimeAgo"
import PostAuthor from "../users/PostAuthor"
import ReactionButton from "./ReactionButton"


export default function PostsList() {

	const posts = useSelector(selectAllPosts)

	const sortedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))



	const renderPosts = sortedPosts.map(post => (
		<article key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content.substring(0, 100)}</p>
			<p>
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>
			<ReactionButton post={post} />
		</article>
	))



	return (
		<>
			<h2>Posts</h2>
			{renderPosts}
		</>
	)
}