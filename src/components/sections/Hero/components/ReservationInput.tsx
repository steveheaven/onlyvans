import { Dispatch, FC, SetStateAction } from "react";
import { ReservationWrap, RangePicker } from "../styles";
import Image from "next/image";
import calendar from "public/icons/calendar.svg";
import { Button } from "@ui";

export type InputDate = [Date | null, Date | null];

type Props = {
  value: InputDate;
  setValue: Dispatch<SetStateAction<InputDate>>;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
  size: "lg" | "md";
};
export const ReservationInput: FC<Props> = ({
  value,
  setValue,
  setModalOpened,
  size = "lg",
}) => {
  return (
    <ReservationWrap>
      <RangePicker
        locale="cs"
        radius="xl"
        size={size}
        variant="unstyled"
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
    </ReservationWrap>
  );
};
