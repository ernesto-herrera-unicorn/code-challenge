import { expect } from 'chai'
import { mockParams, mockData } from './mock-data'
import { state } from '@/store/index'
import mutations from '@/store/mutations'
import actionsInjector from 'inject-loader!@/store/actions'

describe('mutations', () => {
	describe('SET_RESPONSE_DATA', () => {
		it('', () => {
			const data = mockData()
			mutations.SET_RESPONSE_DATA(state, data)
			expect(state.responseData).to.equal(data)
		})
	})

	describe('SET_ITEMS', () => {
		const data = mockData()
		it('If the page of the retrieved data is 1, you can initialize the state.items array with the retrieved data.', () => {
			state.items = data.photos.photo
			mutations.SET_ITEMS(state, data)
			expect(state.items.length).to.equal(data.photos.photo.length)
		})
		it('If the number of pages of acquired data is 2 or more, the acquired data can be concatenated in the state.items array', () => {
			state.items = data.photos.photo
			data.photos.page = 2
			mutations.SET_ITEMS(state, data)
			expect(state.items.length).to.equal(data.photos.photo.length*2)
		})
	})

	describe('SET_SEARCH_PARMS', () => {
		it('All properties can be overwritten', () => {
			mutations.SET_SEARCH_PARMS(state, mockParams())
			expect(state.searchParams).to.deep.equal(mockParams())
		})
		it('Difference can be overwritten', () => {
			const diff = { text: 'dog', page: 2 }
			mutations.SET_SEARCH_PARMS(state, diff)
			expect(state.searchParams).to.deep.equal(Object.assign(mockParams(), diff))
		})
	})
})

const data = mockData();
const actions = actionsInjector({
	'../api/index.js': {
		fetchItems () {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve({ data: data })
				}, 1000)
			})
		}
	}
}).default;

const testAction = (action, payload, state, expectedMutations, done) => {
	let count = 0
	
	const commit = (type, payload) => {
		const mutation = expectedMutations[count]

		try {
			expect(type).to.equal(mutation.type)
			if (payload) {
				expect(payload).to.deep.equal(mutation.payload)
			}
		} catch (error){
			done(error)
		}

		count++
		if (count >= expectedMutations.length) {
			done()
		}
	}

	action({ commit, state }, payload)

	if (expectedMutations.length === 0) {
		expect(count).to.equal(0)
		done()
	}
};

describe('actions', () => {
	describe('FETCH_ITEMS', () => {
		it('Can perform all the expected commits and commit with the correct payload', done => {
			testAction(actions.FETCH_ITEMS, state.searchParams, {}, [
				{ type: 'SET_SEARCH_PARMS' , payload: state.searchParams },
				{ type: 'SET_RESPONSE_DATA', payload: data },
				{ type: 'SET_ITEMS'        , payload: data }
			], done)
		})
	})
})
