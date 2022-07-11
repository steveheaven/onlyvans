import "dayjs/locale/cs";
import { FC, RefObject, useEffect, useRef } from "react";
import * as S from "./styles";
import Image from "next/image";
import circleImage from "public/images/circleImg.png";
import { Button } from "@ui";
import gsap, { Circ } from "gsap";
import theme from "src/theme";

type Props = {
  ref: RefObject<HTMLElement>;
  id: string;
};

const InfoSection: FC = () => {
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#info",
      {
        opacity: 0,
        y: -100,
        x: -400,
      },
      {
        scrollTrigger: {
          trigger: "#info",
          start: "top 50%",
          onEnter: () => {
            gsap.set(".info", {
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
            gsap.set(".info", {
              color: theme.colors.primary,
              fontWeight: "bold",
            });
          },
        },
        x: 50,
        y: 50,
        duration: 1,
        opacity: 1,
        delay: 2,
        ease: Circ.easeOut,
      }
    );
  }, []);

  const services = [
    "Půjčovna dodávek různých typů (i se skříňovou nadstavbou)",
    "Stěhování",
    "Vyklízení",
    "Rozvoz",
    "Odvoz na skládku",
    "Dovoz zboží z obchodu",
  ];

  return (
    <S.Wrap ref={infoRef} id="info">
      {/* <ScrollTrigger ref={sectionRef} id="thirdCircle"> */}
      <Image src={circleImage} height="400" width="400" />
      <S.TextWrap>
        <div>
          <S.BrandName>OnlyVans</S.BrandName>
          <S.BrandName outlined>- půjčovna dodávek</S.BrandName>
        </div>
        <S.Address>Ústí nad Labem - adresa</S.Address>
        <S.UList>
          {/* @TODO: In case of more items, create a loop of items on both lists to keep the code DRY */}
          {services.map((s) => (
            <S.UItem>{s}</S.UItem>
          ))}
          {/* <S.UItem>
            Půjčovna dodávek různých typů (i se skříňovou nadstavbou)
          </S.UItem>
          <S.UItem>Stěhování</S.UItem>
          <S.UItem>Vyklízení</S.UItem>
          <S.UItem>Rozvoz</S.UItem>
          <S.UItem>Odvoz na skládku</S.UItem>
          <S.UItem>Dovoz zboží z obchodu</S.UItem> */}
        </S.UList>
        <Button
          $custConf="primary"
          size="md"
          style={{
            width: "300px",
          }}
          onClick={() => {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: "#pricelist", offsetY: 80 },
            });
          }}
        >
          Ceník
        </Button>
      </S.TextWrap>
      {/* </ScrollTrigger> */}
    </S.Wrap>
  );
};

export default InfoSection;
