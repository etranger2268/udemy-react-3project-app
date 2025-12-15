export const getAllPokemon = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getPokemon = async () => {};
