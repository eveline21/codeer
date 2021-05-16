import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Page } from "../components/page";
import { Pokemon } from "../models/pokemon.model";
import { getPokemon } from "../services/pokemon-service";
import { Tag } from 'antd'

type RouteProps = {
  id: string;
};

export const PokemonDetail: FC = () => {
  const { id } = useParams<RouteProps>();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    getPokemon(id)
        .then(data => setPokemon(data))
        .catch(err => console.log(err))
    
  }, [id]);

  return (
    <Page>
      <h1>{pokemon?.name}</h1>
      <p>{pokemon?.type.map((type: string) => {
            let color = Pokemon.getColorType(type);
            return (
              <Tag color={color} key={type}>
                {type.toUpperCase()}
              </Tag>
            );
          })}
      </p>
      <p>HP: {pokemon?.base.HP}</p>
      <p>Attack: {pokemon?.base.Attack}</p>
      <p>Defense: {pokemon?.base.Defense}</p>
      <p>Sp. Attack: {pokemon?.base["Sp. Attack"]}</p>
      <p>Sp. Defense {pokemon?.base["Sp. Defense"]}</p>
      <p>Speed: {pokemon?.base.Speed}</p>
    </Page>
  );
};
