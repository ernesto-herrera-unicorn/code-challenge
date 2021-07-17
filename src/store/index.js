import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const state = {
	responseData: {},
	items: [],
	searchParams: {
		text: '',
		sort: 'date-posted-desc',
		per_page: 50,
		page: 1
	}
}

const getters = {
	items (state) {
		return state.items
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})
