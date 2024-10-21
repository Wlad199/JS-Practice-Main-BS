import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './Components/posts/postSlice'
import usersReducer from './Components/users/usersSlice'

export default configureStore({
	reducer: {
		posts: postsReducer,
		users: usersReducer
	}
})