import { print } from "graphql";
import gql from "graphql-tag";
import { Pokemon, PokemonResponse } from "../types/Pokemon";
import {
  PokemonDetails,
  PokemonDetailsResponse,
  transformInPokemonDetails,
} from "../types/PokemonDetails";

const POKEMON_GRAPHQL_API = "https://beta.pokeapi.co/graphql/v1beta";

const ListOfPokemonsQuery = gql`
  query pokemonsQuery {
    pokemon_v2_pokemon {
      name
      id
    }
  }
`;

const PokemonDetailQuery = gql`
  query MyQuery($name: String!) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      name
      id
      weight
      pokemon_v2_pokemonmoves {
        pokemon_v2_move {
          name
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        name
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
        query: print(ListOfPokemonsQuery),
      }),
    }
  )
    .then((response) => response.json())
    .then(
      (responseJson: PokemonResponse) => responseJson.data.pokemon_v2_pokemon
    );
};

/**
 *
 * makes a post to the graphql API
 * and returns details about a pokemon
 * @return Json Object
 */
export const fetchPokemonDetails = (
  name: string,
  isMocked = true
): Promise<PokemonDetails> => {
  return fetch(
    isMocked
      ? "http://localhost:3000/api/pokemon-details-mock"
      : POKEMON_GRAPHQL_API,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: print(PokemonDetailQuery),
        variables: {
          name,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((responseJson: PokemonDetailsResponse) => {
      return transformInPokemonDetails(responseJson.data.pokemon_v2_pokemon[0]);
    });
};
