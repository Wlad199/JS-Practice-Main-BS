import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"

export default function PostsList() {

	const posts = useSelector(selectAllPosts)


	const renderPosts = posts
		.slice().sort((a, b) => b.date.localeCompare(a.date))
		.map(post => (
			<article key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.content.substring(0, 100)}</p>
				<p>
					<PostAuthor userId={post.userId} />
					<TimeAgo user timestamp={post.date} />
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