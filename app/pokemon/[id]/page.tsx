import ComeBackButton from "@/components/pokemon-details/ComeBackButton";
import PokemonDetailsComponent from "@/components/pokemon-details/PokemonDetails";
import { fetchPokemonDetails } from "@/graphql/pokemons";
import { PokemonDetails } from "@/types/PokemonDetails";

export default async function Pokemon({ params }: { params: { id: number } }) {
  const pokemonDetails: PokemonDetails = await fetchPokemonDetails(params.id);

  return (
    <div>
      <ComeBackButton />
      <PokemonDetailsComponent pokemonDetails={pokemonDetails} />
    </div>
  );
}
