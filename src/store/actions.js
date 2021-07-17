import { fetchPhotos } from '../api/index.js'

export default {
	FETCH_ITEMS ({ state, commit }, params) {
		if (params) {
			commit('SET_SEARCH_PARMS', params)
		}

		return fetchPhotos(state.searchParams)
			.then(res => {
				commit('SET_RESPONSE_DATA', res.data)
				commit('SET_ITEMS', res.data)
			})
			.catch((error) => {
				console.error(error.message)
			})
	}
}