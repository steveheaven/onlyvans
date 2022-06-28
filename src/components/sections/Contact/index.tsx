import * as S from "./styles";
import { Text } from "@mantine/core";
import theme from "src/theme";

export default function Contact() {
  return (
    <S.Wrap>
      {" "}
      <Text
        weight={900}
        style={{
          fontSize: "4em",
          color: theme.colors.secondaryDark,
        }}
      >
        Kontakt
      </Text>
    </S.Wrap>
  );
}
