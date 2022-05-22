<template>
    <div class="card" v-if="pokemonCardDetail">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="pokemonCardDetail.image" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="pokemonCardDetail.image" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ pokemon.name }}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                </div>
            </div>

            <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
</template>

<script>
// import axios  from 'axios';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'pokemon-card',
    data() {
        return {
            pokemonCardDetail: undefined
        }
    },
    methods: {
        ...mapActions(['GetPokemonCardDetailAction']),
        async loadPokemonCardDetails() {
            if(!this.pokemonExistsInStore(this.pokemon.name))
                await this.GetPokemonCardDetailAction(this.pokemon.name);

            this.pokemonCardDetail = this.getPokemonCardDetailByName(this.pokemon.name);
        }
    },
    async created() {
        await this.loadPokemonCardDetails()
    },
    computed: {
        ...mapGetters(['getPokemonCardDetailByName', 'pokemonExistsInStore']),
    },
    props: {
        pokemon: {
            type: Object,
            default: () => {}
        },
    },
}
</script>