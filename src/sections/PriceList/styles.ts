import { TextProps } from "@mantine/core";
import Image from "next/image";
import styled from "styled-components";
import { Text as ManText } from "@mantine/core";
import { motion } from "framer-motion";

export const Wrap = styled.section`
  margin-top: 20vh;
`;

export const BgImage = styled(Image)`
  border-radius: ${({ theme }) => theme.radius.buttonRadius};
  object-fit: cover;
`;

export const Text = styled(ManText)<TextProps<any>>`
  font-size: 4em;
  color: ${({ theme }) => theme.colors.secondaryDark};
  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin: 10px auto 50px auto;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 110px;
    align-items: space-between;
    width: 100%;
    margin: 100px auto;
  }
`;

export const Button = styled.button`
  font-size: 25px;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  width: 200px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const MotionBox = styled(motion.div)`
  /* background-color: ${({ theme }) => theme.colors.secondaryDark}; */
  border-radius: 15px;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Description = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  position: relative;
  right: -30vw;
  top: -14vw;
  display: flex;
  justify-content: center;
  opacity: 0.9;
  padding: 20px 30px;
  border-radius: ${({ theme }) => theme.radius.buttonRadius};
  height: auto;
  height: 200px;
  width: 400px;
  @media screen and (max-width: 600px) {
    height: auto;
    width: auto;
    position: sticky;
  }
`;
export const List = styled.ul<{ width?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ width }) => width && width};
`;
export const Item = styled.li<{ center?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  margin: 1px 0;
`;

export const CarouselWrap = styled.li<{ center?: boolean }>`
  display: flex;
  justify-content: center;
  position: relative;
  left: -15vw;
  margin: 100px auto 10px auto;
  @media screen and (max-width: 600px) {
    left: 0;
  }
`;
