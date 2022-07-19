import "dayjs/locale/cs";
import { FC, RefObject, useEffect, useRef } from "react";
import * as S from "./styles";
import speedVan from "public/images/speedVan.jpg";
import { Button } from "@ui";
import gsap, { Circ } from "gsap";
import theme from "src/theme";
import { StaticImageData } from "next/image";

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
        opacity: 0.5,
        y: -20,
        x: -200,
      },
      {
        scrollTrigger: {
          scrub: true,
          trigger: "#info",
          onEnter: () => {
            gsap.set(".info", {
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
            gsap.set(".info", {
              color: theme.colors.primary,
              fontWeight: "bold",
            });
          },
        },
        x: 10,
        y: 60,
        duration: 1,
        opacity: 1,
        ease: Circ.easeOut,
      }
    );
  }, []);

  const services = [
    "Jediná půjčovna skříňových dodávek v Ústí nad Labem.",
    "Půjčujeme i klasické dodávky.",
    "Naši dodávku si můžete zapůjčit i s řidičem",
    "Vyklízení nemovitostí",
    "Rozvoz zboží",
    "Odvoz věcí na skládku",
    "Dovoz zboží z obchodu",
  ];

  return (
    <S.Wrap ref={infoRef} id="info">
      {/* <ScrollTrigger ref={sectionRef} id="thirdCircle"> */}
      <S.ImageWrap>
        <S.CircleImage src={speedVan} height="400" width="500" />
      </S.ImageWrap>
      <S.TextWrap>
        <div>
          <S.BrandName>OnlyVans</S.BrandName>
          <S.BrandName outlined>- půjčovna dodávek</S.BrandName>
        </div>
        <S.Address>Ústí nad Labem - adresa</S.Address>
        <S.UList>
          {services.map((s) => (
            <S.UItem key={s}>{s}</S.UItem>
          ))}
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
