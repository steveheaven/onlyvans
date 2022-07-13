import { Dispatch, FC, SetStateAction } from "react";
import { ReservationWrap, RangePicker } from "../styles";
import Image from "next/image";
import calendar from "public/icons/calendar.svg";
import { Button } from "@ui";
import gsap from "gsap";

export type InputDate = [Date | null, Date | null];

type Props = {
  value: InputDate;
  setValue: Dispatch<SetStateAction<InputDate>>;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
  size: "lg" | "md";
  isMobile: boolean;
};
export const ReservationInput: FC<Props> = ({
  value,
  setValue,
  setModalOpened,
  size = "lg",
  isMobile,
}) => {
  return (
    <ReservationWrap>
      <RangePicker
        locale="cs"
        radius="xl"
        size={size}
        variant="unstyled"
        placeholder="Datum"
        value={!isMobile ? value : undefined}
        onChange={setValue}
        icon={<Image src={calendar} height="15" width="15" />}
      />
      <Button
        radius="xl"
        variant="outline"
        color="red"
        size="lg"
        onClick={() => {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: "#cars", offsetY: 80 },
          });
          // setModalOpened(true)
        }}
      >
        Rezervovat
      </Button>
    </ReservationWrap>
  );
};
