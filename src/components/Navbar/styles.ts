import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrap = styled.nav`
  margin: 0px 0 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  /* background-color: red; */
  height: 80px;
`;

export const Logo = styled(Image)`
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 70%;
`;

const activeItem = css`
  border-bottom: 3px solid white;
`;

export const Item = styled.li<{ active?: boolean }>`
  cursor: pointer;
  font-weight: bold;
  ${({ active }) => active && activeItem}
`;
