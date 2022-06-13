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
                    <!-- <figure class="image is-48x48">
                        <img :src="pokemonCardDetail.image" alt="Placeholder image">
                    </figure> -->
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ pokemon.name }}</p>
                    <ul class="type_list">
                       <li v-for="type in pokemonCardDetail.types" :key="type.name">
                            <a>{{type.name}}</a>
                       </li> 
                    </ul>
                    <!-- <p class="subtitle is-6">@johnsmith</p> -->
                </div>
            </div>

            <div class="content">

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
            if (!this.pokemonExistsInStore(this.pokemon.name))
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
            default: () => { }
        },
    },
}
</script>

<style scoped>
.card-image {
    border-bottom: #EEE 1px solid;
    background-color: #F2F2F2;
    cursor: pointer;
}

.card-image:hover {
    background-color: #DDD;
    transition: fill 0.55s;
}

.type {
    justify-content: center;
    height: 2em;
    color: #FFF;
    text-shadow: 1px 1px 1px #333;
    width: 5em;
    border: 1px solid #000;
    border-radius: 5px;
}

.type_list li {
    list-style: none;
    display: inline;
}
</style>