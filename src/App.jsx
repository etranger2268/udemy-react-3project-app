import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import { getAllPokemon, getPokemon } from './utils/pokemon';

export default function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/';

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  // biome-ignore lint: 依存配列にloadPokemonは不要
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
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <div className="text-center w-full h-screen">
      {loading ? (
        <h1>ロード中</h1>
      ) : (
        <div className="grid grid-cols-3 gap-5 mt-5 place-items-center">
          {pokemonData.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}
