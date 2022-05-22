<template>
    <div class="card" v-if="pokemonDetail">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="pokemonDetail.sprites.front_default" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="pokemonDetail.sprites.front_default" alt="Placeholder image">
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
import axios  from 'axios';
export default {
    name: 'pokemon-card',
    data() {
        return {
            pokemonDetail: undefined
        }
    },
    methods: {
        async loadPokemonDetails() {
            await axios.get(this.pokemon.url).then(response => this.pokemonDetail = response.data);
        }
    },
    async created() {
        await this.loadPokemonDetails()
    },
    props: {
        pokemon: {
            type: Object,
            default: () => {}
        },
    },
}
</script>