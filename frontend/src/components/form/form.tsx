import React, { FC, useEffect, useState } from "react";

interface newPokemon {
  name: string;
  type: string[];
  HP: number;
  Attack: number;
  Defense: number;
  'Sp. Attack': number;
  'Sp. Defense': number;
  'Speed': number;
}

export const Form: FC = () => {
  // Add here a table with the data from the server
  const [pokemon, setPokemon] = useState<newPokemon>(
    { name: "",
      type: [],
      HP: 0,
      Attack: 0,
      Defense: 0,
      'Sp. Attack': 0,
      'Sp. Defense': 0,
      Speed: 0
    }
  );
  
  return (
    <p>hallo</p>
  );
};
