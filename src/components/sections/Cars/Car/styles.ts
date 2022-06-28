import styled from "styled-components";
import Image from "next/image";

export const CarImage = styled(Image)`
  object-fit: cover;
`;

export const Params = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ParamItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ParamKey = styled.span`
  font-weight: bolder;
  text-align: left;
`;
export const ParamValue = styled.span`
  font-weight: 300;
`;
