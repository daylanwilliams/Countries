import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
	state: {
		listCountry: [],
		countries: []
	},
	mutations: {
		SelectedCountry(state,payload) {
			state.listCountry.push(payload);
		},
		allCountries(state,payload){
			state.countries.push(payload);
		},
		REMOVE_ITEM(state,payload) {
			state.listCountry.splice(payload,1);
		}
	},
	actions: {
		async allCountries(state){
			await axios.get('https://restcountries.com/v3.1/all')
			.then(response => {
				this.results = response.data
			})
			.catch(error => {console.log( "There was an error" + error.response)})
			state.commit("allCountries", this.results);
		},
		SelectedCountry({commit}, payload) {
			commit('SelectedCountry', payload)
		},
		removeItem({commit}, payload){
			commit('RemoveItem',payload);
		}
	},
	modules: {},
	getters: {
		getAllCountries: state => state.countries,
		storedSelectedCountries(state){
			return state.listCountry;
		}
	}
})
