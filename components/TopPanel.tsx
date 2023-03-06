"use client";

import { PAGE_SIZE } from "@/lib/references";
import { Button, InfoDiv } from "@/styling/common";
import styled, { css } from "styled-components";

const TopPanelStyled = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
`;

const side = () => css`
  display: flex;
  flex: 1;
  gap: 10px;
`;
const LeftSide = styled.div`
  ${side}
`;
const RightSide = styled.div`
  ${side}
  justify-content: flex-end;
`;
const InputStyled = styled.input`
  width: 140px;
  border-radius: 5px;
  border: 2px solid #ddd;
`;

interface TopPanelProps {
  page: number;
  filteredPokemonsLength: number;

  handlePageChange: (value: number) => void;
  handleSearchInputChange: (event: { target: { value: string } }) => void;
}

export default function TopPanel({
  page,
  filteredPokemonsLength,

  handlePageChange,
  handleSearchInputChange,
}: TopPanelProps) {
  return (
    <TopPanelStyled>
      <LeftSide>
        <InputStyled
          type={"search"}
          placeholder="Search pokemon"
          onChange={handleSearchInputChange}
        />
      </LeftSide>
      <RightSide>
        {page > 0 ? (
          <Button onClick={() => handlePageChange(-1)}>Previous</Button>
        ) : null}
        <InfoDiv>{page}</InfoDiv>
        {(page + 1) * PAGE_SIZE < filteredPokemonsLength ? (
          <Button onClick={() => handlePageChange(1)}>Next</Button>
        ) : null}
      </RightSide>
    </TopPanelStyled>
  );
}
