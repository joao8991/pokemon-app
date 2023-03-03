import { print } from "graphql";
import gql from "graphql-tag";
import { Pokemon, PokemonResponse } from "../types/Pokemon";

const STARTING_PAGE = 1;
const DEFAULT_SIZE = 16;

const POKEMON_GRAPHQL_API = "https://beta.pokeapi.co/graphql/v1beta";

const ListOfPokemons = gql`
  query pokemonsQuery {
    pokemon_v2_pokemon {
      name
      id
    }
  }
`;

/**
 *
 * makes a post to the graphql API
 * and returns a list of pokemons
 * @return Json Object
 */
export const fetchPokemons = (isMocked = true): Promise<Pokemon[]> => {
  return fetch(
    isMocked ? "http://localhost:3000/api/pokemon-mock" : POKEMON_GRAPHQL_API,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: print(ListOfPokemons),
      }),
    }
  )
    .then((response) => response.json())
    .then(
      (responseJson: PokemonResponse) => responseJson.data.pokemon_v2_pokemon
    );
};
