import styled from "styled-components";
import { Text as ManText, TextProps } from "@mantine/core";

export const Wrap = styled.section`
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
`;

export const CarsWrap = styled.div`
  margin: 10vh 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: none;
  }
`;

// @TODO: typing
export const Text = styled(ManText)<TextProps<any>>`
  font-size: 4em;
  color: ${({ theme }) => theme.colors.secondaryDark};
  margin-right: 40px;
  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
`;
