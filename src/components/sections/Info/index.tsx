import "dayjs/locale/cs";
import { FC, RefObject, useEffect, useRef } from "react";
import * as S from "./styles";
import Image from "next/image";
import circleImage from "public/images/circleImg.png";
import { Button } from "@ui";
import gsap, { Circ } from "gsap";

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
          scrub: true,
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
          <S.UItem>Půjčovna dodávek (i se skříňovou nadstavbou) </S.UItem>
          <S.UItem>Proč spolupracovat s námi?</S.UItem>
          <S.OList>
            <S.OItem>Férové jednání</S.OItem>
            <S.OItem>Okamžitá odpověď jak emailem tak telefonicky</S.OItem>
            <S.OItem>...</S.OItem>
          </S.OList>
        </S.UList>
        <S.UItem>Nejaky kecy</S.UItem>
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
