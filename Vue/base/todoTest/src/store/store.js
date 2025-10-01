import { createStore } from "vuex";


const state = {
	count: 1
}

const getters = {
	double(state) {
		state.count *= 2
	}
}

const mutations = {
	increment(state, payload) {
		state.count += payload
	},
	decrement(state) {
		state.count--
	}
}








export default createStore({
	state,
	mutations,
	getters
})