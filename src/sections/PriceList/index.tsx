import "dayjs/locale/cs";
import * as S from "./styles";
import theme from "src/theme";
import Carousel from "framer-motion-carousel";
import { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { cars } from "src/data/cars";
import { Title } from "@mantine/core";
import { conditions } from "./config";
import Image from "next/image";
import gsap from "gsap";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
// import { Carousel } from "src/components/molecules/Carousel";

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

type Props = {
  isMobile: boolean;
};

const Item = ({ bg, children }: { bg?: string; children: ReactNode }) => (
  <S.MotionBox
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    style={{
      background: bg,
    }}
  >
    {children}
  </S.MotionBox>
);

export const Pricelist: FC<Props> = ({ isMobile }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const pageNum = () => {
      if (page >= 1) return 0;
      if (page <= 0) return 1;
      return page + newDirection;
    };
    setPage([pageNum(), newDirection]);
  };

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
            color: "grey",
            fontWeight: "bold",
          });
        },
        onEnterBack: () => {
          gsap.set(".navMenu", {
            color: "grey",
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

  return (
    <S.Wrap id="pricelist">
      <S.Text weight={900}>Ceník</S.Text>
      <S.CarouselWrap>
        <div
          style={{
            position: "relative",
            height: "300px",
            width: "300px",
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {cars.map(
              ({ name, img, priceList }, i) =>
                page === i && (
                  <Item key={name}>
                    <S.BgImage height={500} width={800} src={img} />
                    <S.Description>
                      <S.List width={isMobile ? "auto" : "100%"}>
                        {Object.entries(priceList || {}).map(([key, value]) => (
                          <S.Item key={key}>
                            <div
                              style={{
                                fontFamily: "Rubik-Bold",
                              }}
                            >
                              {key} :
                            </div>
                            <div>{value},- Kč/den</div>
                          </S.Item>
                        ))}
                      </S.List>
                    </S.Description>
                  </Item>
                )
            )}
          </AnimatePresence>
        </div>
      </S.CarouselWrap>

      <S.Row>
        <S.Button className="prev" onClick={() => paginate(-1)}>
          Předchozí
        </S.Button>

        <S.Button className="next" onClick={() => paginate(1)}>
          Další
        </S.Button>
      </S.Row>
      {/* <Carousel /> */}
      {/* <Carousel interval={500} autoPlay={false} loop>
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
      </Carousel> */}
    </S.Wrap>
  );
};

export default Pricelist;
