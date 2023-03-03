export interface Pokemon {
  id: number;
  name: string;
}
export interface PokemonResponse {
  data: {
    pokemon_v2_pokemon: Pokemon[];
  };
}
