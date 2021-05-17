import { Injectable } from '@nestjs/common';
import * as pokemonJson from '../data/pokemons.json';
import { PokemonDto } from '../dto/pokemon.dto';

@Injectable()
export class PokemonService {
    private pokemons: PokemonDto[];

    constructor() {
        this.pokemons = pokemonJson;
    }

    findAll(): PokemonDto[] {
        return this.pokemons;
    }

    // TODO finish this endpoint
    findOne(id: string): PokemonDto {
        return this.pokemons.find((pokemon) => pokemon.id.toString() == id);
    }

    create(pokemon: PokemonDto): PokemonDto {
        pokemon.id = this.pokemons.reduce((max, pokemon) => (pokemon.id > max.id ? pokemon : max)).id + 1;
        this.pokemons.push(pokemon);
        return pokemon;
    }
}
