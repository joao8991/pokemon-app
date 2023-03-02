import { print } from "graphql";
import gql from "graphql-tag";
import { PokemonResponse } from "../types/Pokemon";

const ListOfPokemons = gql`
  query pokemonsQuery($size: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $size, offset: $offset) {
      name
      id
      height
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
  page: number,
  size: number
): Promise<PokemonResponse> =>
  fetch("https://beta.pokeapi.co/graphql/v1beta", {
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
  }).then((response) => response.json());
