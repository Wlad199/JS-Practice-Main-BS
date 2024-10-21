import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchPosts = createAsyncThunk(
	'posts/fetchPosts', async () => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			const data = response.data
			return data
		} catch (err) {
			return err.message
		}
	}
)

const initialState = {
	posts: [],
	status: null,
	error: null
}


const counterSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.posts = action.payload
			})
	}
})


export default counterSlice.reducer