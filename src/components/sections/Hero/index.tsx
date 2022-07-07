import "dayjs/locale/cs";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Navbar, Button } from "@ui";
import * as S from "./styles";
import { motion } from "framer-motion";
import Image from "next/image";
import rightArrow from "public/icons/rightArrow.svg";
import calendar from "public/icons/calendar.svg";
import { btnConf } from "../../atoms/Button/styles";
import gsap from "gsap";
import { MutableRefObject } from "react";

type Props = {
  margin: string;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
  logoRef: MutableRefObject<null>;
};

const Hero: FC<Props> = ({ margin, setModalOpened, logoRef }) => {
  const variants = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const today = new Date();
  const tomorrow = new Date(new Date().setDate(today.getDate() + 1) + 1000);

  const [value, setValue] = useState<[Date | null, Date | null]>([
    today,
    tomorrow,
  ]);

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
            <S.ReservationWrap>
              <S.RangePicker
                locale="cs"
                radius="xl"
                size="lg"
                placeholder="Vyberte datum"
                value={value}
                onChange={setValue}
                icon={<Image src={calendar} height="15" width="15" />}
              />
              <Button
                radius="xl"
                variant="outline"
                color="red"
                size="lg"
                onClick={() => setModalOpened(true)}
              >
                Rezervovat
              </Button>
            </S.ReservationWrap>
          </S.ActionsWrap>
        </motion.div>
      </S.Content>
      <S.Skew />
    </S.Wrap>
  );
};

export default Hero;
