import PokemonDetailsComponent from "@/components/PokemonDetails";
import { fetchPokemonDetails } from "@/graphql/pokemons";
import { PokemonDetails } from "@/types/PokemonDetails";
import Link from "next/link";

export default async function Pokemon({ params }: { params: { id: number } }) {
  const pokemonDetails: PokemonDetails = await fetchPokemonDetails(params.id);

  return (
    <div>
      <Link href="/" data-cy="come-back-button">
        come back
      </Link>
      <PokemonDetailsComponent pokemonDetails={pokemonDetails} />
    </div>
  );
}
