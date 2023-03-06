"use client";

import { PAGE_SIZE } from "@/lib/references";
import { Pokemon } from "@/types/Pokemon";
import { useState } from "react";
import styled, { css } from "styled-components";
import PokemonComponent from "../components/Pokemon";
import TopPanel from "./TopPanel";

const PokemonsHolder = styled.div`
  ${({ theme: { breakpoints } }) => {
    return css`
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(6, minmax(100px, 1fr));

      //style for smaller screens
      @media only screen and (max-width: ${breakpoints.large}) {
        grid-template-columns: repeat(4, minmax(100px, 1fr));
      }
      @media only screen and (max-width: ${breakpoints.smaller}) {
        grid-template-columns: repeat(3, minmax(100px, 1fr));
      }
      @media only screen and (max-width: ${breakpoints.ultrasmall}) {
        grid-template-columns: repeat(2, minmax(100px, 1fr));
      }
      @media only screen and (max-width: ${breakpoints.hypersmall}) {
        grid-template-columns: minmax(100px, 1fr);
      }
    `;
  }}
`;

const NoPokemon = styled.div`
  text-align: center;
  font-size: 60px;
`;

export default function PokemonsList({ pokemons }: { pokemons: Pokemon[] }) {
  const [page, setPage] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputChange = (event: { target: { value: string } }) => {
    setSearchInput(event.target.value);
  };

  const handlePageChange = (difference: number) => {
    setPage((previousValue) => previousValue + difference);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchInput)
  );

  const selectedPokemons = filteredPokemons.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE
  );

  return (
    <main>
      <TopPanel
        page={page}
        filteredPokemonsLength={filteredPokemons.length}
        handleSearchInputChange={handleSearchInputChange}
        handlePageChange={handlePageChange}
      />
      <PokemonsHolder>
        {selectedPokemons.length === 0 ? (
          <NoPokemon>no pokemon found</NoPokemon>
        ) : null}
        {selectedPokemons.map(({ id, name }, index) => (
          <PokemonComponent key={index} id={id} name={name} />
        ))}
      </PokemonsHolder>
    </main>
  );
}
