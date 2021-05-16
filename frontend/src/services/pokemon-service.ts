import axios from 'axios'
import { BASE_URL } from '../config.json'
import { Pokemon } from '../models/pokemon.model';


export const getPokemons= async function(): Promise<Pokemon[]> {
    return axios.get(BASE_URL + '/pokemons')
        .then(resp => resp.data)
        .catch((err) => {
            throw err
        })
};

export const getPokemon= async function(id: string) {

};
