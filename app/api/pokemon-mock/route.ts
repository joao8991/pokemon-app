import { delay } from "@/lib/utils";
import { PokemonResponse } from "@/types/Pokemon";

export async function POST() {
  await delay(1000);
  return new Response(JSON.stringify(pokemonExample), { status: 200 });
}

export const pokemonExample: PokemonResponse = {
  data: {
    pokemon_v2_pokemon: [
      {
        name: "metapod",
        id: 11,
      },
      {
        name: "butterfree",
        id: 12,
      },
      {
        name: "weedle",
        id: 13,
      },
      {
        name: "kakuna",
        id: 14,
      },
      {
        name: "beedrill",
        id: 15,
      },
      {
        name: "pidgey",
        id: 16,
      },
      {
        name: "pidgeotto",
        id: 17,
      },
      {
        name: "pidgeot",
        id: 18,
      },
      {
        name: "rattata",
        id: 19,
      },
      {
        name: "raticate",
        id: 20,
      },
      {
        name: "spearow",
        id: 21,
      },
      {
        name: "fearow",
        id: 22,
      },
      {
        name: "ekans",
        id: 23,
      },
      {
        name: "arbok",
        id: 24,
      },
      {
        name: "pikachu",
        id: 25,
      },
      {
        name: "raichu",
        id: 26,
      },
      {
        name: "sandshrew",
        id: 27,
      },
      {
        name: "sandslash",
        id: 28,
      },
      {
        name: "nidoran-f",
        id: 29,
      },
      {
        name: "nidorina",
        id: 30,
      },
    ],
  },
};
