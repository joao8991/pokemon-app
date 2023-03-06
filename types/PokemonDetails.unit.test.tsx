import { PokemonDetailsRaw, transformInPokemonDetails } from "./PokemonDetails";

const pokemonDetailsRaw: PokemonDetailsRaw = {
  name: "metapod",
  id: 11,
  weight: 50,
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: [
      {
        name: "some type",
      },
      {
        name: "another type",
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
};

describe("Pokemon Details types", () => {
  it("should transform as expected", () => {
    const transformedObject = transformInPokemonDetails(pokemonDetailsRaw);
    expect(transformedObject).to.be.equals({
      id: 1,
      weight: 50,
      name: "metapod",
      species: "this specy",
      stats: ["some stat", "another stat"],
      types: ["some type", "another type"],
      moves: ["move1", "move2"],
    });
  });
});
