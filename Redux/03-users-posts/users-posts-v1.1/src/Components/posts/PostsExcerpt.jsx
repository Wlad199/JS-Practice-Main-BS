import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"


export default function PostsExcerpt({ post }) {
	return (
		<article>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<p>
				<PostAuthor userId={post.userId} />
				<TimeAgo user timestamp={post.date} />
			</p>
			<ReactionButton post={post} />
		</article>
	)
}