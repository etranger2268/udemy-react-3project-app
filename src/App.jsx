import { Fragment, useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';

export default function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      // すべてのポケモンデータを取得
      const res = await getAllPokemon(initialURL);

      // 各ポケモンのデータを取得
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemon();
  }, []);

  const loadPokemon = (data) => {
    const _pokemonData = Promise.all(
      data.map((pokemon) => {
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
  };

  return (
    <Fragment>{loading ? <h1>ロード中</h1> : <h1>ポケモンデータを取得しました</h1>};</Fragment>
  );
}
