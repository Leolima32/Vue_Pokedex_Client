import { createStore } from 'vuex'
import { DataService as dataService } from '@/shared/data.service'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    pokemons: [],
    pokemonCardDetails: [],
    nextPage: null
  },
  getters: {
    getPokemonCardDetailByName: state => name => state.pokemonCardDetails.find(poke => poke.name === name),
    pokemonExistsInStore: state => name => state.pokemonCardDetails.find(poke => poke.name === name) !== undefined
  },
  mutations: {
    setPokemonList(state, pokemonList) {
      state.pokemons = [...state.pokemons.concat(pokemonList.results)];
      state.nextPage = pokemonList.next;
    },
    setPokemonCardDetail(state, pokemonCardDetail) {
      state.pokemonCardDetails.push(pokemonCardDetail);
    }
  },
  actions: {
    async GetPokemonsAction({ commit }, paginationUrl = null) {
      const pokemonList = await dataService.getPokemons(paginationUrl);
      commit('setPokemonList', pokemonList);
    },
    async GetPokemonCardDetailAction({ commit }, name) {
      const pokemonCardDetailResult = await dataService.getPokemonCardDetails(name);
      //map only needed properties
      let pokemonCardDetail = {
        name: pokemonCardDetailResult.name,
        image: pokemonCardDetailResult.sprites.front_default,
        types: pokemonCardDetailResult.types.map(t => {
          return t.type
        })
      };
      commit('setPokemonCardDetail', pokemonCardDetail);
    }
  },
  modules: {
  }
})
