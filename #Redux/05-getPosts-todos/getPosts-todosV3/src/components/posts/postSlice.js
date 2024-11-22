import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPost = createAsyncThunk(
	'post/fetchPost',
	async () => {
		try {
			const res = await axios('https://jsonplaceholder.typicode.com/todos')
			const data = await res.data
			return data
		} catch (err) {
			return err.message
		}
	}
)

export const deletePostById = createAsyncThunk(
	'post/deletePost',
	async (id, { dispatch }) => {
		const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
		dispatch(deletePost(id))
	})



const postSlice = createSlice({
	name: 'post',
	initialState: {
		posts: [],
		status: null,
		error: null
	},
	reducers: {
		deletePost: (state, action) => {
			state.posts = state.posts.filter(post => post.id !== action.payload)
		}
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPost.pending, (state) => {
				state.status = 'pending'
			})
			.addCase(fetchPost.fulfilled, (state, action) => {
				state.status = 'fulfilled'
				state.posts = action.payload
			})

			.addCase(fetchPost.rejected, (state, action) => {
				state.status = 'rejected'
				state.error = action.payload
			})
	}
})

export const { deletePost } = postSlice.actions
export default postSlice.reducer