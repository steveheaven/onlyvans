import { TextProps } from "@mantine/core";
import Image from "next/image";
import styled from "styled-components";
import { Text as ManText } from "@mantine/core";

export const Wrap = styled.section`
  margin-top: 20vh;
`;

export const Content = styled.div`
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  @media screen and (max-width: 600px) {
    font-size: 0.5em;
  }
`;
export const BgImage = styled(Image)`
  border-radius: ${({ theme }) => theme.radius.buttonRadius};
  object-fit: cover;
  /* position: relative; */
`;

export const InfoPanel = styled.div`
  position: absolute;
  height: 40%;
  color: white;
  width: 100%;
  /* opacity: 0.; */
  background: rgb(0, 3, 72);
  background: linear-gradient(
    133deg,
    rgba(0, 3, 72, 0.7) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  border-radius: 9px;
`;

export const Row = styled.div`
  display: flex;
  /* background-color: brown; */
  height: 100%;
`;

export const Col = styled.div`
  flex: 1 0 50%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const List = styled.ul<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width && width};
  /* justify-content: center; */
  /* align-items: center; */
`;
export const Item = styled.li<{ center?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  margin: 1px 0;
`;

export const Text = styled(ManText)<TextProps<any>>`
  font-size: 4em;
  color: ${({ theme }) => theme.colors.secondaryDark};
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const Title = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 0.4em;
  }
`;
