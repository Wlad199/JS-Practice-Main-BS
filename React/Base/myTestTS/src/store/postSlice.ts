import { PayloadAction, UnknownAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type Post = {
	postId: number,
	id: number,
	title: string,
	body: string
}

type PostState = {
	posts: Post[],
	loading: boolean,
	error: string | null
}


export const fetchPosts = createAsyncThunk<Post[], undefined, { rejectValue: string }>(
	'posts/fetchPosts',
	async (_, { rejectWithValue }) => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		if (!response.ok) {
			return rejectWithValue('Server error!')
		}
		const data = await response.json()
		return data
	}
)

const initialState: PostState = {
	posts: [],
	loading: false,
	error: null
}

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
				state.posts = action.payload
			})
			//.addCase(fetchPosts.rejected, (state, action) => {
			//	state.error = action.payload
			//})
			.addMatcher(isError, (state, action: PayloadAction<string>) => {
				state.error = action.payload
			})
	}
})


function isError(action: UnknownAction) {
	return action.type.endsWith('rejected')
}

export default postSlice.reducer