import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "./postSlice"
import { selectAllUsers } from "../users/usersSlice"


export default function AddPostForm() {

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [userId, setUserId] = useState('')

	const dispatch = useDispatch()

	const onSavePostClicked = () => {
		if (title && content) {
			setTitle('')
			setContent('')
			dispatch(addPost(title, content, userId))
		}
	}

	const users = useSelector(selectAllUsers)

	const usersOptions = users.map(user => (
		<option key={user.id} value={user.id}>{user.name}</option>
	))

	return (
		<>
			<h2>Add a New Post</h2>
			<form>
				<div>
					<label>
						Post Title:
						<br />
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							type="text"
						/>
					</label>
				</div>
				<div>
					<label>
						Post Message:
						<br />
						<textarea
							value={content}
							onChange={e => setContent(e.target.value)}
						></textarea>
					</label>
				</div>
				<div>
					<select onChange={(e) => setUserId(e.target.value)}>
						<option value=""></option>
						{usersOptions}
					</select>
				</div>
				<button
					className="send-post"
					type="button"
					onClick={onSavePostClicked}
					disabled={!title || !content}
				>
					Save Post
				</button>
			</form>
		</>
	)
}