import * as S from "./styles";
import { ButtonProps as MBtnProps } from "@mantine/core";
import { FC, ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  $custConf?: keyof typeof S.btnConf;
} & MBtnProps<"button">;

const Button: FC<ButtonProps> = (props) => {
  return <S.CoreButton {...props} />;
};

export default Button;
