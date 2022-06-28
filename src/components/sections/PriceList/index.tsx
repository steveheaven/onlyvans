import "dayjs/locale/cs";
import * as S from "./styles";
import { Text } from "@mantine/core";
import theme from "src/theme";
import Carousel from "framer-motion-carousel";
import { Fragment } from "react";
import { cars } from "src/data/cars";
import { Title } from "@mantine/core";
import { conditions } from "./config";
import Image from "next/image";

export default function Pricelist() {
  return (
    <S.Wrap>
      <Text
        weight={900}
        style={{
          fontSize: "4em",
          color: theme.colors.secondaryDark,
        }}
      >
        Ceník
      </Text>
      <Carousel interval={500} autoPlay={false} loop>
        {cars.map(({ img, name, logo, priceList, deposit, aboveLimit }, i) => (
          <Fragment key={i}>
            <S.Content>
              <S.BgImage height={500} width={800} src={img} />
              <S.InfoPanel>
                <S.Row>
                  <S.Col>
                    <Title
                      style={{
                        marginBottom: "40px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Image
                          height={50}
                          width={50}
                          src={logo}
                          alt={name}
                          style={{ objectFit: "cover" }}
                        />
                        <div style={{ marginLeft: "30px" }}>{name}</div>
                      </div>
                    </Title>
                    <S.List width="60%">
                      {Object.entries(priceList || {}).map(([key, value]) => (
                        <S.Item key={key}>
                          <div
                            style={{
                              fontFamily: "Rubik-Bold",
                            }}
                          >
                            {key} :
                          </div>
                          <div>{value}</div>
                        </S.Item>
                      ))}
                    </S.List>
                  </S.Col>
                  <S.Col>
                    <Title>Podmínky zapůjčení</Title>
                    <S.List width="100%">
                      {conditions.map((condition, i) => (
                        <S.Item center key={i}>
                          {typeof condition === "string"
                            ? condition
                            : condition(aboveLimit, deposit)}
                        </S.Item>
                      ))}
                    </S.List>
                  </S.Col>
                </S.Row>
              </S.InfoPanel>
            </S.Content>
          </Fragment>
        ))}
      </Carousel>
    </S.Wrap>
  );
}
