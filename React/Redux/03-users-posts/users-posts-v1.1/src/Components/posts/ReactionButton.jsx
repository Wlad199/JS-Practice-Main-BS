import { useDispatch } from "react-redux"
import { reactionAdded } from './postSlice'

const reactionEmoji = {
	thumbsUp: '👍',
	wow: '😮',
	heart: '❤️',
	rocket: '🚀',
	coffee: '☕'
}


export default function ReactionButton({ post }) {

	const dispatch = useDispatch()

	const reactiomButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {

		return (
			<button
				key={name}
				type="button"
				onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
			>
				{emoji} {post.reactions[name]}
			</button>
		)
	})
	return <div>{reactiomButtons}</div>
}
