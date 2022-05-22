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
import { mapState, mapActions } from 'vuex';
import PokemonCard from '@/components/PokemonCard'

export default {
    name: 'PokedexView',
    methods: {
        ...mapActions(['GetPokemonsAction']),
        loadPokemons() {
            // if(this.pokemons.count === 0)
                this.GetPokemonsAction();
        }
    },
    created() {
        this.loadPokemons();
    },
    computed: {
        ...mapState(['pokemons'])
    },
    components: { PokemonCard }
}
</script>

<style lang="scss" scoped>
section {
    margin: 10px;
}
</style>