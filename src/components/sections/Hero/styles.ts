import styled from "styled-components";
import { DateRangePicker } from "@mantine/dates";
import { Button as ManButton, ButtonProps } from "@mantine/core";

export const Wrap = styled.section`
  background-image: url("images/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Overlay = styled.div`
  background-image: linear-gradient(rgb(0, 0, 0), rgb(32, 45, 160));
  mix-blend-mode: soft-light;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div<{ margin: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  margin: ${({ margin }) => margin};
`;

export const Skew = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  clip-path: polygon(0 90%, 100% 21%, 100% 100%, 0 100%);
`;

export const BrandName = styled.div`
  font-family: RubikGlitch-Regular;
  font-size: 5em;
  margin-top: 10rem;
  @media screen and (max-width: 600px) {
    margin-top: 10rem;
    font-size: 3em;
    flex-direction: column;
  }
`;

export const Headline1 = styled.div`
  font-family: RubikMonoOne-Regular;
  font-size: 4em;
  -webkit-text-stroke: 2px white;
  color: transparent;
  margin-top: 30px;
  @media screen and (max-width: 600px) {
    margin-top: 10px;
    font-size: 2em;
  }
`;

export const Headline2 = styled.div`
  font-family: RubikMonoOne-Regular;
  font-size: 2.5em;
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const ActionsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15vh;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: space-between;
    margin-top: 5vh;
    height: 120px;
  }
`;

export const ReservationWrap = styled.div`
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-radius: 100px;
  @media only screen and (max-width: 1000px) {
    z-index: 10;
  }
`;

export const RangePicker = styled(DateRangePicker)<{ isReservation?: boolean }>`
  ${({ isReservation }) => (isReservation ? "" : "width: 400px;")}
  & > div > div > div > input {
    color: ${({ theme }) => theme.colors.grey80};
    border: none;
  }
  @media screen and (max-width: 1000px) {
    & > div > div > div > input {
      color: ${({ theme }) => theme.colors.grey80};
      margin-top: 10px 0;
      width: 100%;
      border: none;
      box-shadow: ${({ theme }) => theme.shadows.commonShadow};
      z-index: 100;
    }
  }
  @media screen and (max-width: 600px) {
    margin-top: 10px 0;
    /* font-size: 0.3em; */
    width: 100%;
  }
`;

export const Button = styled(ManButton)<ButtonProps<any>>`
  width: 300px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 10px 0;
  }
`;
