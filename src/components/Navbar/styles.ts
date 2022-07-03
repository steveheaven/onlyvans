import Image from "next/image";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

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

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
`;

export const Nav = styled(motion.nav)`
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  height: 90vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(motion.li)`
  color: white;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
`;

export const SvgBox = styled(motion.div)``;
