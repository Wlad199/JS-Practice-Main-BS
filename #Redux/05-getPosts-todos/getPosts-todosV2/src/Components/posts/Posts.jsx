import { useDispatch } from "react-redux"
import { deletePostById } from "./postSlice"


export default function Post({ post }) {

	const dispatch = useDispatch()

	return (
		<li>
			<button onClick={() => dispatch(deletePostById(post.id))}>del</button>
			<span>{post.title}</span>
		</li>
	)
}