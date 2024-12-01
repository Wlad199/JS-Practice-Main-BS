import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './components/users/userSlice'
import todoReducer from './components/todo/todoSlice'
import postReducer from './components/posts/postSlice'

export default configureStore({
	reducer: {
		users: usersReducer,
		todo: todoReducer,
		post: postReducer
	}
})