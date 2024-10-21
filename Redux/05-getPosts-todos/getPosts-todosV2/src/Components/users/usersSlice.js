import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: {
		name: '',
		surName: ''
	}
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getData: (state, action) => {
			state.data = action.payload
			console.log(state.data)
		}
	}
})

export const { getData } = usersSlice.actions
export default usersSlice.reducer