import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: '',
	surName: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addName: (state, action) => {
			state.name = action.payload
		},
		addSurName: (state, action) => {
			state.surName = action.payload
		}
	}
})

export const { addName, addSurName } = userSlice.actions
export default userSlice.reducer