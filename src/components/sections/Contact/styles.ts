import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  margin: 40vh 0 15vh 0;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  height: 515px;
  border-radius: 9px;
  color: white;
  padding: 50px;
`;

export const Col = styled.div`
  flex: 1 0 50%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
