import Link from "next/link";
import styled, { css } from "styled-components";

const basicDivStyle = () => css`
  background-color: #ef5350;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
`;
export const Button = styled.button`
  ${basicDivStyle}
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const InfoDiv = styled.div`
  ${basicDivStyle}
  padding:8px 14px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none !important; ;
`;
