<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="pokemon in pokemons" :key="pokemon.name">
                <PokemonCard :pokemon="pokemon" />
            </div>

        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PokemonCard from '@/components/PokemonCard'

export default {
    name: 'PokedexView',
    methods: {
        ...mapActions,
        loadPokemons() {
            this.pokemons = [{
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon/4/"
            },
            {
                "name": "charmeleon",
                "url": "https://pokeapi.co/api/v2/pokemon/5/"
            },
            {
                "name": "charizard",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            },
            {
                "name": "squirtle",
                "url": "https://pokeapi.co/api/v2/pokemon/7/"
            },
            {
                "name": "wartortle",
                "url": "https://pokeapi.co/api/v2/pokemon/8/"
            },
            {
                "name": "blastoise",
                "url": "https://pokeapi.co/api/v2/pokemon/9/"
            },
            {
                "name": "caterpie",
                "url": "https://pokeapi.co/api/v2/pokemon/10/"
            },
            {
                "name": "metapod",
                "url": "https://pokeapi.co/api/v2/pokemon/11/"
            },
            {
                "name": "butterfree",
                "url": "https://pokeapi.co/api/v2/pokemon/12/"
            },
            {
                "name": "weedle",
                "url": "https://pokeapi.co/api/v2/pokemon/13/"
            },
            {
                "name": "kakuna",
                "url": "https://pokeapi.co/api/v2/pokemon/14/"
            },
            {
                "name": "beedrill",
                "url": "https://pokeapi.co/api/v2/pokemon/15/"
            },
            {
                "name": "pidgey",
                "url": "https://pokeapi.co/api/v2/pokemon/16/"
            },
            {
                "name": "pidgeotto",
                "url": "https://pokeapi.co/api/v2/pokemon/17/"
            },
            {
                "name": "pidgeot",
                "url": "https://pokeapi.co/api/v2/pokemon/18/"
            },
            {
                "name": "rattata",
                "url": "https://pokeapi.co/api/v2/pokemon/19/"
            },
            {
                "name": "raticate",
                "url": "https://pokeapi.co/api/v2/pokemon/20/"
            }];
        }
    },
    created() {
        this.loadPokemons();
    },
    components: { PokemonCard }
}
</script>

<style lang="scss" scoped>
section {
    margin: 10px;
}
</style>