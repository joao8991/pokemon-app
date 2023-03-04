"use client";

import { Pokemon } from "@/types/Pokemon";
import { useState } from "react";
import PokemonComponent from "../components/Pokemon";

const PAGE_SIZE = 16;

export default function PokemonsList({ pokemons }: { pokemons: Pokemon[] }) {
  const [page, setPage] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputChange = (event: { target: { value: string } }) => {
    setSearchInput(event.target.value);
  };

  const handlePageChange = (difference: number) => {
    setPage((previousValue) => previousValue + difference);
  };

  const selectedPokemons = pokemons
    .filter((pokemon) => pokemon.name.includes(searchInput))
    .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <main>
      <h1>pokemons</h1>main page
      <input type={"search"} onChange={handleSearchInputChange} />
      {page > 0 ? (
        <button onClick={() => handlePageChange(-1)}>Previous</button>
      ) : null}
      {(page + 1) * PAGE_SIZE < pokemons.length ? (
        <button onClick={() => handlePageChange(1)}>Next</button>
      ) : null}
      <div>
        {selectedPokemons.length === 0 ? <div>no pokemon found</div> : null}
        {selectedPokemons.map(({ id, name }, index) => (
          <PokemonComponent key={index} id={id} name={name} />
        ))}
      </div>
    </main>
  );
}
