import { Fragment, useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';

export default function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/';

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      // すべてのポケモンデータを取得
      const res = await getAllPokemon(initialURL);

      // 各ポケモンのデータを取得
      await loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemon();
  }, []);

  const loadPokemon = async (data) => {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <Fragment>{loading ? <h1>ロード中</h1> : <h1>ポケモンデータを取得しました</h1>};</Fragment>
  );
}
