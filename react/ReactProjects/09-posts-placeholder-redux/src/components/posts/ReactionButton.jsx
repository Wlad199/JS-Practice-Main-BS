import { addReaction } from "./postSlice"
import { useDispatch } from "react-redux"

const reactionEmoji = {
	thumbsUp: '👍',
	wow: '😮',
	heart: '❤️',
	rocket: '🚀',
	coffee: '☕'
}

export default function ReactionButton({ post }) {

	const dispatch = useDispatch()

	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		return (
			<button
				key={name}
				type="button"
				onClick={() => dispatch(addReaction({ postId: post.id, reaction: name }))}
			>
				{emoji} {post.reactions[name]}
			</button>
		)
	})

	return (
		<>
			{reactionButtons}
		</>
	)
}