import { createStore } from 'vuex'
import { DataService as dataService } from '@/shared/data.service' 

export default createStore({
  state: {
    pokemons: [],
    pokemondDetails: []
  },
  getters: {
  },
  mutations: {
    setPokemonList(pokemonList) {
      state.pokemons.push(pokemonList);
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
