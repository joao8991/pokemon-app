export interface Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemonsprites: {
    sprites: string;
  }[];
}
export interface PokemonResponse {
  data: {
    pokemon_v2_pokemon: Pokemon[];
  };
}
