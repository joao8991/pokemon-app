import PokemonsList from "@/components/PokemonsList";
import { fetchPokemons } from "./graphql/pokemons";
import { Pokemon, PokemonResponse } from "./types/Pokemon";

export default async function Home() {
  const pokemons: Pokemon[] = await fetchPokemons();

  return <PokemonsList pokemons={pokemons} />;
}
