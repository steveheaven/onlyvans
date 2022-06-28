import styled from "styled-components";

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
`;
