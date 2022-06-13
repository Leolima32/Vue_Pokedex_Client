<template>
    <section>
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-one-quarter" v-for="pokemon in pokemons" :key="pokemon.name">
                    <PokemonCard :pokemon="pokemon" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PokemonCard from '@/components/PokemonCard'

export default {
    name: 'PokedexView',
    methods: {
        ...mapActions(['GetPokemonsAction']),
        loadPokemons() {
            if (this.pokemons.length === 0)
                this.GetPokemonsAction();
        },
        handleScroll() {
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
                this.GetPokemonsAction(this.nextPage);
            }
        }
    },
    created() {
        this.loadPokemons();
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    computed: {
        ...mapState(['pokemons', 'nextPage']),
    },
    components: { PokemonCard }
}
</script>

<style lang="scss" scoped>
section {
    margin: 10px;
}
</style>