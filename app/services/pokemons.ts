import { fetchPokemons } from "../graphql/pokemons";
import { Pokemon, PokemonResponse } from "../types/Pokemon";

export const getPokemons = async (page: number = 2, size: number = 16) => {
  const pokemonsReponse: PokemonResponse = await fetchPokemons(page, size);

  console.log(pokemonsReponse);

  return pokemonsReponse.data.pokemon_v2_pokemon as Pokemon[];
};
