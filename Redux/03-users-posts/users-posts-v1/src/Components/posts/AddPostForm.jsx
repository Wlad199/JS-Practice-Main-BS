import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { postAdded } from "./postSlice"
import { selectAllUsers } from "../users/usersSlice"



export default function AddPostForm() {

	const dispatch = useDispatch()
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [userId, setUserId] = useState('')

	const users = useSelector(selectAllUsers)

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postAdded(title, content, userId))
			setTitle('')
			setContent('')
		}
	}


	const usersOptions = users.map(user => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	))


	return (
		<section>
			<h2>Add a New Post</h2>
			<form>

				<label>
					Post Title:
					<br />
					<input
						type="text"
						name="postTitle"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<br />

				<label>
					Author:
					<select value={userId} onChange={(e) => setUserId(e.target.value)}>
						<option value=""></option>
						{usersOptions}
					</select>
				</label>
				<br />

				<label>
					Post Message:
					<br />
					<textarea
						name="postContent"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</label>
				<br />

				<button
					className="send"
					disabled={!title || !content}
					onClick={onSavePostClicked}
					type="button">
					Save Post
				</button>
			</form>
		</section>
	)
}