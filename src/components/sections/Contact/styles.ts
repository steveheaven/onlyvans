import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  margin: 40vh 0 15vh 0;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  height: 515px;
  border-radius: 9px;
  color: white;
  padding: 50px;
  @media screen and (max-width: 600px) {
    margin: 10vh 0 15vh 0;
    flex-direction: column;
    font-size: 0.8em;
    height: 140vh;
  }
`;

export const Col = styled.div`
  flex: 1 0 50%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    justify-content: space-evenly;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 80vw;
  }
`;
