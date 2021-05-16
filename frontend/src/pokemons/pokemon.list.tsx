import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/page";
import { Pokemon } from "../models/pokemon.model";

import { getPokemons } from "../services/pokemon-service"

export const PokemonList: FC = () => {
  // Add here a table with the data from the server
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons()
        .then(data => setPokemons(data))
        .catch(err => console.log(err))
    
  }, []);

  return (
    <Page>
      <ul>
        {pokemons.map((pokemon) => 
          <li>{pokemon.name}</li>
        )}
      </ul>
    </Page>
  );
};
