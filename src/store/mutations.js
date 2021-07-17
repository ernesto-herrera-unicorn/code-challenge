export default {
	SET_RESPONSE_DATA (state, data) {
		state.responseData = data
	},
	SET_ITEMS (state, data) {
		if (data.photos.page === 1) {
			state.items = [...data.photos.photo]
		} else {
			state.items = [...state.items, ...data.photos.photo]
		}
	},
	SET_SEARCH_PARMS (state, params) {
		Object.keys(params).forEach(key => {
			state.searchParams[key] = params[key]
		})
	}
}