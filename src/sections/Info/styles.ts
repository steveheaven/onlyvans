import styled, { css } from "styled-components";
// import { Image } from "@mantine/core";
import Image from "next/image";

export const Wrap = styled.section`
  margin: 10vh 0;
  display: flex;
  flex-direction: row;
`;

export const BrandName = styled.span<{ outlined?: boolean }>`
  font-family: Rubik-Bold;
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 2em;
  margin-right: 10px;
  ${({ outlined }) =>
    outlined &&
    css`
      -webkit-text-stroke: 1px black;
      color: transparent;
    `};
`;

export const Address = styled.div`
  font-family: Rubik-Bold;
  color: ${({ theme }) => theme.colors.grey100};
`;

export const TextWrap = styled.div`
  font-family: Rubik-Regular;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50px;
  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

export const UList = styled.ul`
  margin: 20px 0;
`;

export const UItem = styled.li`
  margin: 10px 0;
  @media screen and (max-width: 600px) {
    /* color: white; */
    font-size: 0.6em;
    margin: 5px 0;
    width: 60%;
  }
`;

export const OList = styled.ol`
  margin-left: 40px;
  font-size: 0.7em;
  /* color: ${({ theme }) => theme.colors.grey80}; */
`;

export const OItem = styled.li`
  font-family: Rubik-Regular;
  margin: 10px 0;
`;

export const ImageWrap = styled.div`
  @media screen and (max-width: 1000px) {
    position: fixed;
    top: 60%;
    left: 40%;
    z-index: -1;
  }
`;

export const CircleImage = styled(Image)`
  /* border-radius: 50%; */

  /* position: absolute; */
  /* object-fit: cover; */
  /* width: 100%; */
  /* height: 600px; */
`;
