import { createStore } from 'vuex'
import { DataService as dataService } from '@/shared/data.service'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    pokemons: [],
    pokemonCardDetails: []
  },
  getters: {
    getPokemonCardDetailByName: state => name => state.pokemonCardDetails.find(poke => poke.name === name),
    pokemonExistsInStore: state => name => state.pokemonCardDetails.find(poke => poke.name === name) !== undefined
  },
  mutations: {
    setPokemonList(state, pokemonList) {
      state.pokemons = pokemonList.results;
    },
    setPokemonCardDetail(state, pokemonCardDetail) {
      state.pokemonCardDetails.push(pokemonCardDetail);
    }
  },
  actions: {
    async GetPokemonsAction({ commit }) {
      const pokemonList = await dataService.getPokemons();
      commit('setPokemonList', pokemonList);
    },
    async GetPokemonCardDetailAction({ commit }, name) {
      const pokemonCardDetailResult = await dataService.getPokemonCardDetails(name);
      //map only needed properties
      let pokemonCardDetail = {
        name: pokemonCardDetailResult.name,
        image: pokemonCardDetailResult.sprites.front_default
      };
      commit('setPokemonCardDetail', pokemonCardDetail);
    }
  },
  modules: {
  }
})
