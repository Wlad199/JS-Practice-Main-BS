import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"


export default function PostsExcept({ post }) {
	return (
		<article>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<p className="info">
				<PostAuthor userId={post.id} />
				<TimeAgo timestamp={post.date} />
			</p>
			<ReactionButton post={post} />
		</article>
	)
}