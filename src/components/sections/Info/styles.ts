import styled, { css } from "styled-components";

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
  color: ${({ theme }) => theme.colors.grey80};
`;

export const TextWrap = styled.div`
  font-family: Rubik-Regular;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50px;
`;

export const UList = styled.ul`
  margin: 20px 0;
`;

export const UItem = styled.li`
  margin: 10px 0;
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
