import { createStore } from 'vuex'
import { DataService as dataService } from '@/shared/data.service' 
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    pokemons: [],
    pokemondDetails: []
  },
  getters: {
  },
  mutations: {
    setPokemonList(state, pokemonList) {
      state.pokemons = pokemonList.results;
    }
  },
  actions: {
    async GetPokemonsAction({ commit }) {
      const pokemonList = await dataService.getPokemons();
      commit('setPokemonList', pokemonList);
    }
  },
  modules: {
  }
})
