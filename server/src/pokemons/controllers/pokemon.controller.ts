import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePokemonDto } from '../dto/create.pokemon.dto';
import { PokemonBase, PokemonDto } from '../dto/pokemon.dto';
import { PokemonService } from '../services';

@Controller('pokemons')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}

    @Get()
    findAll(): PokemonDto[] {
        return this.pokemonService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): PokemonDto {
        return this.pokemonService.findOne(id);
    }

    @Post()
    create(@Body() createPokemonDto: CreatePokemonDto): PokemonDto {
        const pokemon = new PokemonDto();
        pokemon.name = createPokemonDto.name;
        pokemon.type = createPokemonDto.type;
        pokemon.base = new PokemonBase();
        pokemon.base.HP = createPokemonDto.HP;
        pokemon.base.Attack = createPokemonDto.Attack;
        pokemon.base.Defense = createPokemonDto.Defense;
        pokemon.base['Sp. Attack'] = createPokemonDto['Sp. Attack'];
        pokemon.base['Sp. Defense'] = createPokemonDto['Sp. Defense'];
        pokemon.base.Speed = createPokemonDto.Speed;
        return this.pokemonService.create(pokemon);
    }

    @Delete(':id')
    remove(@Param('id') id: string): PokemonDto {
        return this.pokemonService.remove(id);
    }
}
