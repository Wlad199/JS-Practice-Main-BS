import { createStore } from "vuex";

const state = {
	count: 100,
}

const mutations = {
	increment(state, payload) {
		state.count += payload
	},
	decrement(state, payload) {
		state.count -= payload
	}
}

const getters = {
	double(state) {
		return state.count * 2
	}
}

export default createStore({
	state,
	mutations,
	getters
})