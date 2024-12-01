import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Components/counterClice'

export default configureStore({
	reducer: {
		counter: counterReducer
	}
})