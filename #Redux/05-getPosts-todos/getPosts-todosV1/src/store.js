import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Components/users/usersSlice'
import todoReducer from './Components/todo/todoSlice'
import postReducer from './Components/post/postSlice'

export default configureStore({
	reducer: {
		user: userReducer,
		todo: todoReducer,
		posts: postReducer
	}
})