import Image from "next/image";
import styled from "styled-components";
import { LinkStyled } from "@/styling/common";

const PokemonHolder = styled.div`
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;

  // effect
  background: rgba(255, 255, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid white;

  & h4 {
    margin: 10px 0;
  }

  &:hover {
    border-color: red;

    h4 {
      color: red;
    }
  }
`;

export default function PokemonComponent({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  return (
    <LinkStyled key={id} href={`pokemon/${name}`}>
      <PokemonHolder>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          width={200}
          height={200}
        />
        <h4>{name}</h4>
      </PokemonHolder>
    </LinkStyled>
  );
}
