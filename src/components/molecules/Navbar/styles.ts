import Image from "next/image";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { MutableRefObject } from "react";

const mobileWrap = css`
  justify-content: left;
`;
const desktopWrap = css`
  justify-content: center;
`;

export const Wrap = styled.div<{ isMobile: boolean }>`
  margin: 0px 0 100px 0;
  display: flex;
  ${({ isMobile }) => (isMobile ? mobileWrap : desktopWrap)};
  position: fixed;
  top: 0;
  color: white;
  width: 100%;
  height: 60px;
  z-index: 10;
`;
export const NavWrap = styled.nav`
  width: 80%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Image)`
  cursor: pointer;
`;

export const Menu = styled.ul`
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 40%;
`;

const activeItem = css`
  color: ${({ theme }) => theme.colors.primary};
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
