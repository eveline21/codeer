import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Page } from "../components/page";
import { Pokemon } from "../models/pokemon.model";
import { Table, Tag, Button } from 'antd'

import { getPokemons, createPokemon } from "../services/pokemon-service"
import { ColumnsType } from "antd/lib/table";
import { PlusOutlined } from "@ant-design/icons"
import { PokemonForm } from "../components/form/pokemon.form"

export const PokemonList: FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const history = useHistory();
  const [showAdd, setShowAdd] = useState<boolean>(false);
  
  useEffect(() => {
    getPokemons()
        .then(data => setPokemons(data))
        .catch(err => console.log(err))
    
  }, []);

  const onCreate = (values: any) => {
    createPokemon(values)
      .then(resp => {
        setPokemons([...pokemons, resp.data])
      })
      .catch(err => console.log(err));
    setShowAdd(false);
  };

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
      <Button type="primary" shape="round" icon={<PlusOutlined />} size="large" onClick={() => setShowAdd(!showAdd)}>
          Add pokemon
      </Button>
      <PokemonForm visible={showAdd} onCreate={onCreate} onCancel={() => {setShowAdd(false);}}></PokemonForm>
      <Table<Pokemon> columns={columns} dataSource={pokemons} rowKey={record => record.id}
      onRow={(record) => {
        return {
          onClick: event => {history.push('/' + record.id);}
        }
      }}/>
    </Page>
  );
};
