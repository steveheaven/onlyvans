import Image from "next/image";
import styled from "styled-components";

export const Wrap = styled.section`
  margin-top: 20vh;
`;

export const Content = styled.div`
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
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
    rgba(0, 3, 72, 0.85) 0%,
    rgba(0, 0, 0, 0.85) 100%
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
