import { useEffect } from "react";
import { getAllPokemon } from "./utils/pokemon";

export default function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/';


  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await getAllPokemon(initialURL);
      console.log(res);
    };
    fetchPokemon();
  },[]);
  return <h1 className="text-4xl text-red-700">App</h1>;
}
