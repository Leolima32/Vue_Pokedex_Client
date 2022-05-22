import { API_URL } from "./config";
import axios from 'axios';

const getPokemons = async function (paginationUrl = null) {
    try {
        let url = paginationUrl ?? `${API_URL}pokemon/`
        const response = await axios.get(url);
        
        if (response.status !== 200)
            throw Error(response.message);

        return response.data;

    } catch (error) {
        console.error(error);
        return [];
    }
};

const getPokemonCardDetails = async function (pokemonName) {
    try {
        const response = await axios.get(`${API_URL}pokemon/${pokemonName}`);

        if (response.status !== 200)
            throw Error(response.message);

        return response.data;

    } catch (error) {
        console.error(error);
        return [];
    }
};

export const DataService = {
    getPokemons,
    getPokemonCardDetails
}