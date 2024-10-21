import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './Components/todoSlice'

export default configureStore({
	reducer: {
		posts: todoReducer
	}
})