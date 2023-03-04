"use client";

import { InfoDiv } from "@/styling/common";
import { PokemonDetails } from "@/types/PokemonDetails";
import Image from "next/image";
import styled from "styled-components";

const PageLayout = styled.main`
  display: flex;
`;
const PokemonInfo = styled.div``;

const ElementsList = styled.div`
  display: flex;
  gap: 10px;
`;

const MoveElement = styled(InfoDiv)`
  background-color: #efcd52;
`;
const TypeElement = styled(InfoDiv)`
  background-color: #9952ef;
`;
const StatElement = styled(InfoDiv)`
  background-color: #52efb3;
`;

interface propDetails {
  pokemonDetails: PokemonDetails;
}

export default function PokemonDetailsComponent({
  pokemonDetails,
}: propDetails) {
  return (
    <PageLayout>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`}
        alt={pokemonDetails.name}
        width={500}
        height={500}
      />
      <PokemonInfo>
        <h2>{pokemonDetails.name}</h2>
        <h3>Pokemon info</h3>
        <p>Weight: {pokemonDetails.weight}</p>
        <p>Species: {pokemonDetails.species}</p>
        <h3>Stats</h3>
        <ElementsList>
          {pokemonDetails.stats.map((stat) => (
            <StatElement key={stat}>{stat}</StatElement>
          ))}
        </ElementsList>
        <h3>Types</h3>
        <ElementsList>
          {pokemonDetails.types.map((type) => (
            <TypeElement key={type}>{type}</TypeElement>
          ))}
        </ElementsList>
        <h3>Moves</h3>
        <ElementsList>
          {pokemonDetails.moves.map((move) => (
            <MoveElement key={move}>{move}</MoveElement>
          ))}
        </ElementsList>
      </PokemonInfo>
    </PageLayout>
  );
}
