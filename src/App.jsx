import { Fragment, useEffect, useState } from 'react';
import { getAllPokemon } from './utils/pokemon';

export default function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };
    fetchPokemon();
  }, []);

  return (
    <Fragment>{loading ? <h1>ロード中</h1> : <h1>ポケモンデータを取得しました</h1>};</Fragment>
  );
}
