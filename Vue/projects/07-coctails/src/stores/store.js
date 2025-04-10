import axios from 'axios'
import { createStore } from 'vuex'

const COCKTAILS_CATEGORY = {
	nonAlcoholic: 'filter.php?a=Non_Alcoholic',
	alcoholic: 'filter.php?a=Alcoholic',
	ordinary: 'filter.php?c=Ordinary_Drink',
	cocktail: 'filter.php?c=Cocktail',
	glass: 'filter.php?g=Cocktail_glass',
	champagne: 'filter.php?g=Champagne_flute'
}

const state = {
	cocktails: []
}
const category = COCKTAILS_CATEGORY['nonAlcoholic']

const mutations = {
	getCoctails(state, payload) {
		state.cocktails = payload
	}
}

const actions = {
	async fetchCoctails({ commit }) {
		try {
			const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${category}`)
			console.log(response.data.drinks)
			commit('getCoctails', response.data.drinks)

		} catch (err) {
			console.warn(err.message)
		}
	}
}



export default createStore({
	state,
	mutations,
	actions,
})