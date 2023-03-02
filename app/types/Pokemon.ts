export interface Pokemon {
  id: number;
  name: string;
  height: number;
}
export interface PokemonResponse {
  data: {
    pokemon_v2_pokemon: Pokemon[];
  };
}
