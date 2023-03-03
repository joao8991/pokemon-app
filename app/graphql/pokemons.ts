import { print } from "graphql";
import gql from "graphql-tag";
import { PokemonResponse } from "../types/Pokemon";

const STARTING_PAGE = 1;
const DEFAULT_SIZE = 16;

const POKEMON_GRAPHQL_API = "https://beta.pokeapi.co/graphql/v1beta";

const ListOfPokemons = gql`
  query pokemonsQuery($size: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $size, offset: $offset) {
      name
      id
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

/**
 *
 * makes a post to the graphql API
 * and returns a list of pokemons
 * @return Json Object
 */
export const fetchPokemons = (
  page: number = STARTING_PAGE,
  size: number = DEFAULT_SIZE,
  isMocked = true
): Promise<PokemonResponse> =>
  fetch(
    isMocked ? "http://localhost:3000/api/pokemon-mock" : POKEMON_GRAPHQL_API,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: print(ListOfPokemons),
        variables: {
          offset: size * (page - 1),
          size,
        },
      }),
    }
  ).then((response) => response.json());
