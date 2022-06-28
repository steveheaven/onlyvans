import styled, {
  DefaultTheme,
  css,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { Button as MantineButton } from "@mantine/core";
import { ButtonProps } from ".";

export const btnConf: {
  hero: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  primary: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  hero: css`
    color: white;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-family: RubikMonoOne-Regular;
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
};

export const CoreButton = styled(MantineButton)<{
  $custConf?: ButtonProps["$custConf"];
}>`
  ${({ $custConf }) => $custConf && btnConf[$custConf]}
`;
