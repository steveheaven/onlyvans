import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled(motion.main)<{ margin: string }>`
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  margin: ${({ margin }) => margin};
  max-width: 1200px;
  /* height: 200vh; */
`;

export const Content = styled(motion.div)`
  width: 100%;
`;
