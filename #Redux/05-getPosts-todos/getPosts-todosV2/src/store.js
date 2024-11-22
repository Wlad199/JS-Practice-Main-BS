import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './Components/users/usersSlice'
import todoReducer from './Components/todo/todoSlice'
import postReducer from './Components/posts/postSlice'

export default configureStore({
	reducer: {
		users: usersReducer,
		todo: todoReducer,
		posts: postReducer
	}
})