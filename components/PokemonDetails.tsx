import { PokemonDetails } from "@/types/PokemonDetails";
import Image from "next/image";

interface propDetails {
  pokemonDetails: PokemonDetails;
}

export default function PokemonDetailsComponent({
  pokemonDetails,
}: propDetails) {
  console.log(pokemonDetails);

  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`}
        alt={pokemonDetails.name}
        width={200}
        height={200}
      />
      <div>{pokemonDetails.name}</div>
      <div>{pokemonDetails.weight}</div>
      {pokemonDetails.stats.map((stat) => (
        <div key={stat}>{stat}</div>
      ))}
      {pokemonDetails.types.map((type) => (
        <div key={type}>{type}</div>
      ))}
      {pokemonDetails.moves.map((move) => (
        <div key={move}>{move}</div>
      ))}
    </div>
  );
}
