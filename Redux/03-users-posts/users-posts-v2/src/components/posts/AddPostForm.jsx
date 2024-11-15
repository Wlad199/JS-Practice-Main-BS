import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";


export default function AddPostForm() {

	const dispatch = useDispatch()

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [userId, setUserId] = useState('')
	const [addRequestStatus, setAddRequestStatus] = useState('idle')

	//const canSave = Boolean(title) && Boolean(content) && addRequestStatus === 'idle'
	const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

	const users = useSelector(selectAllUsers)

	const onSavePostClicked = () => {
		if (canSave) {
			try {
				setAddRequestStatus('pending')
				dispatch(addNewPost({ title, body: content, userId })).unwrap()

				setTitle('')
				setContent('')
				setUserId('')
			} catch (err) {
				console.warn('Failed to save the post', err)
			} finally {
				setAddRequestStatus('idle')
			}
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
					<input
						type="text"
						name="postTitle"
						placeholder="Post Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<br />

				<label>
					<textarea
						type="text"
						name="postContent"
						placeholder="Post Content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</label>
				<br />

				<select onChange={(e) => setUserId(e.target.value)}>
					<option value="">Select User</option>
					{usersOptions}
				</select>
				<br />

				<button
					type="button"
					className="send"
					onClick={onSavePostClicked}
					disabled={!canSave}
				>
					Save Post
				</button>

			</form>
		</section>
	)
}