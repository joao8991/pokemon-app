import { delay } from "@/lib/utils";
import { PokemonDetailsResponse } from "@/types/PokemonDetails";

export async function POST() {
  await delay(1000);
  return new Response(JSON.stringify(pokemonDetailsExample), { status: 200 });
}

export const pokemonDetailsExample: PokemonDetailsResponse = {
  data: {
    pokemon_v2_pokemon: [
      {
        name: "bulbasaur",
        id: 1,
        weight: 69,
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: [
            {
              name: "grass",
            },
            {
              name: "poison",
            },
          ],
        },
        pokemon_v2_pokemonstats: {
          pokemon_v2_stat: [
            {
              name: "hp",
            },
            {
              name: "attack",
            },
            {
              name: "defense",
            },
            {
              name: "self-attack",
            },
            {
              name: "self-defense",
            },
            {
              name: "speed",
            },
          ],
        },
        pokemon_v2_pokemonspecy: {
          name: "bulbasaur",
        },
        pokemon_v2_pokemonmoves: {
          pokemon_v2_move: [
            {
              name: "razor-wind",
            },
            {
              name: "swords-dance",
            },
            {
              name: "cut",
            },
            {
              name: "bind",
            },
            {
              name: "vine-whip",
            },
            {
              name: "headbutt",
            },
            {
              name: "tackle",
            },
            {
              name: "body-slam",
            },
          ],
        },
      },
    ],
  },
};

export const pokemonDetailsExample2: PokemonDetailsResponse = {
  data: {
    pokemon_v2_pokemon: [
      {
        name: "metapod",
        id: 11,
        weight: 50,
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: [
            {
              name: "some type",
            },
          ],
        },
        pokemon_v2_pokemonstats: {
          pokemon_v2_stat: [
            {
              name: "some stat",
            },
            {
              name: "another stat",
            },
          ],
        },
        pokemon_v2_pokemonspecy: {
          name: "this specy",
        },
        pokemon_v2_pokemonmoves: {
          pokemon_v2_move: [
            {
              name: "move1",
            },
            {
              name: "move2",
            },
          ],
        },
      },
    ],
  },
};
