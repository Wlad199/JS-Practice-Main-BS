import { createStore, Store, CommitOptions, DispatchOptions } from 'vuex';

export interface RootState {
	count: number
}

const state: RootState = {
	count: 55
}

const mutations = {
	increment(state) {
		state.count++
	}
}

const actions = {

}




export default createStore({
	state,
	mutations,
	actions
})