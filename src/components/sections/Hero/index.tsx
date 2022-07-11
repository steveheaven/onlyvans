import "dayjs/locale/cs";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Navbar, Button } from "@ui";
import * as S from "./styles";
import { motion } from "framer-motion";
import Image from "next/image";
import rightArrow from "public/icons/rightArrow.svg";
import { btnConf } from "../../atoms/Button/styles";
import gsap from "gsap";
import { MutableRefObject } from "react";
import { ReservationInput } from "./components/ReservationInput";
import { ReservationDate } from "pages";

type Props = {
  margin: string;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
  logoRef: MutableRefObject<null>;
  reservationDate: ReservationDate;
  setReservationDate: Dispatch<SetStateAction<ReservationDate>>;
};

const Hero: FC<Props> = ({
  margin,
  setModalOpened,
  logoRef,
  reservationDate,
  setReservationDate,
}) => {
  const variants = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // const today = new Date();
  // const tomorrow = new Date(new Date().setDate(today.getDate() + 1) + 1000);

  // const [value, setValue] = useState<[Date | null, Date | null]>([
  //   today,
  //   tomorrow,
  // ]);

  return (
    <S.Wrap id="home">
      <S.Overlay />
      <S.Content margin={margin}>
        <motion.div variants={variants} initial="hidden" animate="visible">
          <S.BrandName ref={logoRef}>OnlyVans</S.BrandName>
          <S.Headline1>PŮJČOVNA DODÁVEK</S.Headline1>
          <S.Headline2 id="navChange">Ústí nad Labem</S.Headline2>
          <S.ActionsWrap>
            <Button
              style={{
                width: "300px",
              }}
              $custConf={Object.keys(btnConf)[0] as keyof typeof btnConf}
              radius="xl"
              variant="outline"
              color="red"
              size="xl"
              rightIcon={<Image src={rightArrow} height="15" width="15" />}
              onClick={() =>
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#cars", offsetY: 80 },
                })
              }
            >
              VOZOVÝ PARK
            </Button>
            <ReservationInput
              size="lg"
              value={reservationDate}
              setValue={setReservationDate}
              setModalOpened={setModalOpened}
            />
          </S.ActionsWrap>
        </motion.div>
      </S.Content>
      <S.Skew />
    </S.Wrap>
  );
};

export default Hero;
