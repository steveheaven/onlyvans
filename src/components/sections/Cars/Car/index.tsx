import {
  Card as MCard,
  Text,
  Badge,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { Button } from "@ui";
import { FC } from "react";
import { CarMetadata } from "src/data/cars";
import * as S from "./styles";

type Props = {
  metadata: CarMetadata;
};
export const Car: FC<Props> = ({ metadata }) => {
  const { name, img, params, priceFrom } = metadata;
  const theme = useMantineTheme();

  return (
    <div
      key={name}
      style={{ margin: "auto", transform: "scale(0.3)", opacity: 0 }}
      className="card"
    >
      <MCard shadow="sm" p="lg">
        <MCard.Section>
          <S.CarImage src={img} height={400} alt={name} style={{}} />
        </MCard.Section>

        <Group
          position="apart"
          style={{ marginBottom: 15, marginTop: theme.spacing.lg }}
        >
          <Text weight={900} style={{ fontSize: "1.4em" }}>
            {name}
          </Text>
        </Group>
        <Group style={{ marginBottom: 20 }}>
          <Badge color="green" size="xl" style={{ fontSize: "0.7em" }}>
            {priceFrom}
          </Badge>
        </Group>

        <S.Params>
          {Object.entries(params).map(([key, value]) => (
            <S.ParamItem key={key}>
              <Text weight={600} style={{ textAlign: "left" }}>
                {key}:
              </Text>
              <Text weight={300} style={{ marginLeft: "10px" }}>
                {value}
              </Text>
            </S.ParamItem>
          ))}
        </S.Params>

        <Button
          color="red"
          fullWidth
          style={{ marginTop: 30 }}
          size="lg"
          $custConf="primary"
        >
          Rezervovat
        </Button>
      </MCard>
    </div>
  );
};
