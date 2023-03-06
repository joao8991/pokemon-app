export interface PokemonDetailsRaw {
  id: number;
  name: string;
  weight: number;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonstats: {
    pokemon_v2_stat: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonspecy: {
    name: string;
  };
  pokemon_v2_pokemonmoves: {
    pokemon_v2_move: {
      name: string;
    };
  }[];
}
export interface PokemonDetails {
  id: number;
  name: string;
  weight: number;
  species: string;
  types: string[];
  moves: string[];
  stats: string[];
}

export interface PokemonDetailsResponse {
  data: {
    pokemon_v2_pokemon: PokemonDetailsRaw[];
  };
}

export const transformInPokemonDetails = (
  pokemonDetailsRaw: PokemonDetailsRaw
): PokemonDetails => {
  return {
    id: pokemonDetailsRaw.id,
    weight: pokemonDetailsRaw.weight,
    name: pokemonDetailsRaw.name,
    species: pokemonDetailsRaw.pokemon_v2_pokemonspecy.name,
    stats: pokemonDetailsRaw.pokemon_v2_pokemonstats.map(
      (stat) => stat.pokemon_v2_stat.name
    ),
    types: pokemonDetailsRaw.pokemon_v2_pokemontypes.map(
      (type) => type.pokemon_v2_type.name
    ),
    moves: pokemonDetailsRaw.pokemon_v2_pokemonmoves.map(
      (move) => move.pokemon_v2_move.name
    ),
  };
};
