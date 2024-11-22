import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk(
	'posts/getPosts', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
		const data = response.data
		return data
	}
)

export const deletePostById = createAsyncThunk(
	'posts/deletePostById', async (id, { dispatch }) => {
		const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
		console.log(id)
		dispatch(deletePost(id))
	}
)


const initialState = {
	posts: [],
	status: null
}

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		deletePost: (state, action) => {
			state.posts = state.posts.filter(post => post.id !== action.payload)
		}
	},
	extraReducers(builder) {
		builder
			.addCase(getPosts.pending, (state, action) => {
				state.status = 'pending'
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.status = 'fulfilled'
				state.posts = action.payload
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.status = 'rejected'
			})
	}
})

export const { deletePost } = postSlice.actions
export default postSlice.reducer