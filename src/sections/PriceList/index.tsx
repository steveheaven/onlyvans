import "dayjs/locale/cs";
import * as S from "./styles";
import { Text } from "@mantine/core";
import theme from "src/theme";
import Carousel from "framer-motion-carousel";
import { FC, Fragment, useEffect, useState } from "react";
import { cars } from "src/data/cars";
import { Title } from "@mantine/core";
import { conditions } from "./config";
import Image from "next/image";
import gsap from "gsap";
// import { Carousel } from "src/components/molecules/Carousel";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isMobile: boolean;
};

export const Pricelist: FC<Props> = ({ isMobile }) => {
  const imageSize = isMobile ? 20 : 50;
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#pricelist",
        start: "top 50%",
        onEnter: () => {
          gsap.set(".pricelist", {
            color: theme.colors.primary,
            fontWeight: "bold",
          });
          gsap.set(".navMenu", {
            color: "black",
            fontWeight: "bold",
          });
        },
        onEnterBack: () => {
          gsap.set(".navMenu", {
            color: "black",
            fontWeight: "bold",
          });
          gsap.set(".pricelist", {
            color: theme.colors.primary,
            fontWeight: "bold",
          });
        },
      },
    });
  }, []);

  const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
  `;

  const Button = styled.button`
    font-size: 25px;
    background-color: rgb(68, 109, 246);
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
  `;

  const Text = styled.span`
    font-size: 25px;

    margin: 0 10px;
  `;

  const MotionBox = styled(motion.div)`
    background-color: rgb(172, 236, 161);
    border-radius: 15px;
    height: 100%;
    width: 100%;
    position: absolute;
  `;

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
      };
    },
  };

  const TestComp = ({ bg }: { bg: string }) => (
    <MotionBox
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      style={{
        background: bg,
      }}
    />
  );

  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <S.Wrap id="pricelist">
      <S.Text weight={900}>Ceník</S.Text>
      {/* <Carousel /> */}
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
                          height={imageSize}
                          width={imageSize}
                          src={logo}
                          alt={name}
                          style={{ objectFit: "cover" }}
                        />
                        <S.Title style={{ marginLeft: "30px" }}>{name}</S.Title>
                      </div>
                    </Title>
                    <S.List width={isMobile ? "auto" : "60%"}>
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
                    <S.Title>Podmínky zapůjčení</S.Title>
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
};

export default Pricelist;
