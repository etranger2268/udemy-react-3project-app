import { Fragment, useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import { getAllPokemon, getPokemon } from './utils/pokemon';

export default function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/';

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState('');

  // biome-ignore lint: 依存配列にloadPokemonは不要
  useEffect(() => {
    const fetchPokemon = async () => {
      // すべてのポケモンデータを取得
      const res = await getAllPokemon(initialURL);
      setNextURL(res.next);

      // 各ポケモンのデータを取得
      await loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemon();
  }, []);

  const loadPokemon = async (data) => {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };

  const handlePrevPage = () => {};
  const handleNextPage = async () => {
    setLoading(true);
    const data = await getAllPokemon(nextURL);
    setNextURL(data.next);
    await loadPokemon(data.results);
    setLoading(false);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="text-center w-full h-screen">
        {loading ? (
          <h1>ロード中</h1>
        ) : (
          <Fragment>
            <div className="grid grid-cols-3 gap-5 mt-5 place-items-center">
              {pokemonData.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
            <div>
              <button type="button" onClick={handlePrevPage}>前へ</button>
              <button type="button" onClick={handleNextPage}>次へ</button>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
