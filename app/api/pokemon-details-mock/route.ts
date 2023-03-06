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
        pokemon_v2_pokemonmoves: [
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "body-slam",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "mega-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "rage",
            },
          },
          {
            pokemon_v2_move: {
              name: "mimic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "reflect",
            },
          },
          {
            pokemon_v2_move: {
              name: "bide",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "body-slam",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "mega-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "rage",
            },
          },
          {
            pokemon_v2_move: {
              name: "mimic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "reflect",
            },
          },
          {
            pokemon_v2_move: {
              name: "bide",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-wind",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "headbutt",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "defense-curl",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "snore",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "mud-slap",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "fury-cutter",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-wind",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "headbutt",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "defense-curl",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "snore",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "mud-slap",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "fury-cutter",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "secret-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "bullet-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "body-slam",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "mimic",
            },
          },
          {
            pokemon_v2_move: {
              name: "defense-curl",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "snore",
            },
          },
          {
            pokemon_v2_move: {
              name: "mud-slap",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "fury-cutter",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "secret-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "bullet-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "body-slam",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "mimic",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "secret-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "bullet-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "secret-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "bullet-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "natural-gift",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "captivate",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "snore",
            },
          },
          {
            pokemon_v2_move: {
              name: "mud-slap",
            },
          },
          {
            pokemon_v2_move: {
              name: "fury-cutter",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "knock-off",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "secret-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "bullet-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "natural-gift",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "captivate",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "power-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "headbutt",
            },
          },
          {
            pokemon_v2_move: {
              name: "string-shot",
            },
          },
          {
            pokemon_v2_move: {
              name: "snore",
            },
          },
          {
            pokemon_v2_move: {
              name: "mud-slap",
            },
          },
          {
            pokemon_v2_move: {
              name: "fury-cutter",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "knock-off",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "secret-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "bullet-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "natural-gift",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "captivate",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "power-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-pledge",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "venoshock",
            },
          },
          {
            pokemon_v2_move: {
              name: "round",
            },
          },
          {
            pokemon_v2_move: {
              name: "echoed-voice",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "secret-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "bullet-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "body-slam",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "mimic",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "secret-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "bullet-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "power-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "bind",
            },
          },
          {
            pokemon_v2_move: {
              name: "snore",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "knock-off",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-pledge",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "venoshock",
            },
          },
          {
            pokemon_v2_move: {
              name: "round",
            },
          },
          {
            pokemon_v2_move: {
              name: "echoed-voice",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "power-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "grassy-terrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-pledge",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "venoshock",
            },
          },
          {
            pokemon_v2_move: {
              name: "round",
            },
          },
          {
            pokemon_v2_move: {
              name: "echoed-voice",
            },
          },
          {
            pokemon_v2_move: {
              name: "confide",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "power-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "grassy-terrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "bind",
            },
          },
          {
            pokemon_v2_move: {
              name: "snore",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "knock-off",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-pledge",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "cut",
            },
          },
          {
            pokemon_v2_move: {
              name: "strength",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "flash",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "rock-smash",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "secret-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "venoshock",
            },
          },
          {
            pokemon_v2_move: {
              name: "round",
            },
          },
          {
            pokemon_v2_move: {
              name: "echoed-voice",
            },
          },
          {
            pokemon_v2_move: {
              name: "confide",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "power-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "grassy-terrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-pledge",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "venoshock",
            },
          },
          {
            pokemon_v2_move: {
              name: "round",
            },
          },
          {
            pokemon_v2_move: {
              name: "echoed-voice",
            },
          },
          {
            pokemon_v2_move: {
              name: "work-up",
            },
          },
          {
            pokemon_v2_move: {
              name: "confide",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-whistle",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "power-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "grassy-terrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "bind",
            },
          },
          {
            pokemon_v2_move: {
              name: "snore",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "knock-off",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-pledge",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-team",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "swagger",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "return",
            },
          },
          {
            pokemon_v2_move: {
              name: "frustration",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "hidden-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "venoshock",
            },
          },
          {
            pokemon_v2_move: {
              name: "round",
            },
          },
          {
            pokemon_v2_move: {
              name: "echoed-voice",
            },
          },
          {
            pokemon_v2_move: {
              name: "work-up",
            },
          },
          {
            pokemon_v2_move: {
              name: "confide",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "headbutt",
            },
          },
          {
            pokemon_v2_move: {
              name: "mega-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "reflect",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "outrage",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "tackle",
            },
          },
          {
            pokemon_v2_move: {
              name: "growl",
            },
          },
          {
            pokemon_v2_move: {
              name: "vine-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "growth",
            },
          },
          {
            pokemon_v2_move: {
              name: "leech-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "razor-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "poison-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-powder",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "take-down",
            },
          },
          {
            pokemon_v2_move: {
              name: "sweet-scent",
            },
          },
          {
            pokemon_v2_move: {
              name: "synthesis",
            },
          },
          {
            pokemon_v2_move: {
              name: "worry-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "double-edge",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "petal-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "toxic",
            },
          },
          {
            pokemon_v2_move: {
              name: "skull-bash",
            },
          },
          {
            pokemon_v2_move: {
              name: "curse",
            },
          },
          {
            pokemon_v2_move: {
              name: "nature-power",
            },
          },
          {
            pokemon_v2_move: {
              name: "ingrain",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-pledge",
            },
          },
          {
            pokemon_v2_move: {
              name: "grassy-glide",
            },
          },
          {
            pokemon_v2_move: {
              name: "swords-dance",
            },
          },
          {
            pokemon_v2_move: {
              name: "body-slam",
            },
          },
          {
            pokemon_v2_move: {
              name: "solar-beam",
            },
          },
          {
            pokemon_v2_move: {
              name: "light-screen",
            },
          },
          {
            pokemon_v2_move: {
              name: "amnesia",
            },
          },
          {
            pokemon_v2_move: {
              name: "rest",
            },
          },
          {
            pokemon_v2_move: {
              name: "substitute",
            },
          },
          {
            pokemon_v2_move: {
              name: "snore",
            },
          },
          {
            pokemon_v2_move: {
              name: "protect",
            },
          },
          {
            pokemon_v2_move: {
              name: "sludge-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "giga-drain",
            },
          },
          {
            pokemon_v2_move: {
              name: "endure",
            },
          },
          {
            pokemon_v2_move: {
              name: "charm",
            },
          },
          {
            pokemon_v2_move: {
              name: "false-swipe",
            },
          },
          {
            pokemon_v2_move: {
              name: "attract",
            },
          },
          {
            pokemon_v2_move: {
              name: "sleep-talk",
            },
          },
          {
            pokemon_v2_move: {
              name: "safeguard",
            },
          },
          {
            pokemon_v2_move: {
              name: "sunny-day",
            },
          },
          {
            pokemon_v2_move: {
              name: "facade",
            },
          },
          {
            pokemon_v2_move: {
              name: "helping-hand",
            },
          },
          {
            pokemon_v2_move: {
              name: "weather-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "bullet-seed",
            },
          },
          {
            pokemon_v2_move: {
              name: "magical-leaf",
            },
          },
          {
            pokemon_v2_move: {
              name: "seed-bomb",
            },
          },
          {
            pokemon_v2_move: {
              name: "energy-ball",
            },
          },
          {
            pokemon_v2_move: {
              name: "leaf-storm",
            },
          },
          {
            pokemon_v2_move: {
              name: "power-whip",
            },
          },
          {
            pokemon_v2_move: {
              name: "grass-knot",
            },
          },
          {
            pokemon_v2_move: {
              name: "venoshock",
            },
          },
          {
            pokemon_v2_move: {
              name: "round",
            },
          },
          {
            pokemon_v2_move: {
              name: "work-up",
            },
          },
          {
            pokemon_v2_move: {
              name: "grassy-terrain",
            },
          },
        ],
        pokemon_v2_pokemontypes: [
          {
            pokemon_v2_type: {
              name: "grass",
            },
          },
          {
            pokemon_v2_type: {
              name: "poison",
            },
          },
        ],
        pokemon_v2_pokemonstats: [
          {
            pokemon_v2_stat: {
              name: "hp",
            },
          },
          {
            pokemon_v2_stat: {
              name: "attack",
            },
          },
          {
            pokemon_v2_stat: {
              name: "defense",
            },
          },
          {
            pokemon_v2_stat: {
              name: "special-attack",
            },
          },
          {
            pokemon_v2_stat: {
              name: "special-defense",
            },
          },
          {
            pokemon_v2_stat: {
              name: "speed",
            },
          },
        ],
        pokemon_v2_pokemonspecy: {
          name: "bulbasaur",
        },
      },
    ],
  },
};
