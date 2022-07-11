import styled from "styled-components";
import { DateRangePicker } from "@mantine/dates";

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
`;

export const Headline1 = styled.div`
  font-family: RubikMonoOne-Regular;
  font-size: 4em;
  -webkit-text-stroke: 2px white;
  color: transparent;
  margin-top: 30px;
`;

export const Headline2 = styled.div`
  font-family: RubikMonoOne-Regular;
  font-size: 2.5em;
`;

export const ActionsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15vh;
`;

export const ReservationWrap = styled.div`
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-radius: 100px;
`;

export const RangePicker = styled(DateRangePicker)<{ isReservation?: boolean }>`
  ${({ isReservation }) => (isReservation ? "" : "width: 400px;")}
  & > div > div > div > input {
    color: ${({ theme }) => theme.colors.grey80};
    border: none;
  }
`;
