export default function Card({ pokemon }) {
  return (
    <div className="w-2xs shadow-xl rounded-lg bg-white">
      <div>
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name}の画像`}
          className="block mx-auto"
        />
      </div>
      <h3 className="p-0 text-2xl font-black mb-2.5 mt-0">{pokemon.name}</h3>
      <div>
        <div>タイプ</div>
        {pokemon.types.map((type) => (
          <div key={type.slot}>
            <span>{type.type.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <div>
          <p>重さ：{pokemon.weight}</p>
        </div>
        <div>
          <p>高さ：{pokemon.height}</p>
        </div>
        <div>
          <p>アビリティ：{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
}
