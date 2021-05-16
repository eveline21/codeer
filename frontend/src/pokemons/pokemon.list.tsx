import React, { FC, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Page } from "../components/page";
import { Pokemon } from "../models/pokemon.model";
import { Table, Tag } from 'antd'

import { getPokemons } from "../services/pokemon-service"
import { ColumnsType } from "antd/lib/table";

export const PokemonList: FC = () => {
  // Add here a table with the data from the server
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const history = useHistory();
  
  useEffect(() => {
    getPokemons()
        .then(data => setPokemons(data))
        .catch(err => console.log(err))
    
  }, []);

  const columns: ColumnsType<Pokemon> = [
    { title: "ID", dataIndex: "id"},
    { title: "Name", dataIndex: "name"},
    { title: "Type",
      key: 'type',
      dataIndex: "type",
      render: types => (
        <>
          {types.map((type: string) => {
            let color = Pokemon.getColorType(type);
            return (
              <Tag color={color} key={type}>
                {type.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )
    }
  ]
  return (
    <Page>
      <Table<Pokemon> columns={columns} dataSource={pokemons} rowKey={record => record.id}
      onRow={(record) => {
        return {
          onClick: event => {history.push('/' + record.id);}
        }
      }}/>
    </Page>
  );
};
