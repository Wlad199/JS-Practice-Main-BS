import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	name: '',
	userName: ''
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addName: (state, action) => {
			state.name = action.payload
		},
		addSurName: (state, action) => {
			state.userName = action.payload
		}
	}
})

export const { addName, addSurName } = userSlice.actions
export default userSlice.reducer