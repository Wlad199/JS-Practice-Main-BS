import { createStore } from "vuex";

const state = {
	count: 1
}

const mutations = {
	increment(state, payload) {
		state.count += payload
	},
	decrement(state, payload) {
		state.count -= payload.value
	}
}

const getters = {
	double(state) {
		state.count *= 2
	}
}

const actions = {
	asyncIncrement(context, payload) {
		setTimeout(() => {
			context.commit('increment', payload)
		}, 1000);
	},

	asyncDecrement({ commit }, payload) {
		setTimeout(() => {
			commit('decrement', payload)
		}, 1000);
	},
}

export default createStore({
	state,
	mutations,
	getters,
	actions
})