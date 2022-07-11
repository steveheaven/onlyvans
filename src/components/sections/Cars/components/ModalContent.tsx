import { Dispatch, FC, SetStateAction } from "react";
import { cars } from "src/data/cars";
import { ModalContenWrap, CarImage } from "./styles";
import { Box, Checkbox, Group, Input, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image";
import mail from "public/images/mail_grey.svg";
import phone from "public/images/phone_grey.svg";
import Button from "src/components/atoms/Button";
import { RangePicker } from "../../Hero/styles";
import calendar from "public/icons/calendar.svg";
import { ReservationDate } from "pages";

type Props = {
  carId: number;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
  reservationDate: ReservationDate;
  setReservationDate: Dispatch<SetStateAction<ReservationDate>>;
};

export const ModalContent: FC<Props> = ({
  carId,
  setModalOpened,
  reservationDate,
  setReservationDate,
}) => {
  const { name, img } = cars[carId];

  const form = useForm({
    initialValues: {
      email: "",
      phone: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <ModalContenWrap>
      <h2>Rezervace</h2>
      <CarImage height={300} width={300} src={img} />
      <h3>{name}</h3>
      <Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            required
            icon={<Image src={phone} height="15" width="15" />}
            label="Telefon"
            placeholder="+420..."
            {...form.getInputProps("phone")}
            style={{
              margin: "10px 0",
              width: "60%",
            }}
            radius="xl"
          />
          <TextInput
            required
            icon={<Image src={mail} height="15" width="15" />}
            label="Email"
            placeholder="vas@email.com"
            {...form.getInputProps("email")}
            style={{
              margin: "10px 0",
              width: "60%",
            }}
            radius="xl"
          />
          <RangePicker
            style={{
              margin: "10px 0",
              width: "60%",
            }}
            isReservation
            locale="cs"
            radius="xl"
            // size={size}
            label="Od - do"
            variant="unstyled"
            placeholder="Vyberte datum"
            value={reservationDate}
            onChange={setReservationDate}
            icon={<Image src={calendar} height="15" width="15" />}
          />

          <Checkbox
            mt="md"
            label="Souhlasím se zpracováním osobních údajů"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <Group position="left" mt="md">
            <Button
              color="red"
              fullWidth
              style={{ marginTop: 30 }}
              size="lg"
              $custConf="primary"
            >
              Rezervovat
            </Button>
          </Group>
        </form>
      </Box>
      {/* <Input
        radius="xl"
        icon={<Image src={phone} height="15" width="15" />}
        placeholder="Telefon"
        style={{
          margin: "10px 0 0 0",
          width: "50%",
        }}
      />
      <Input
        radius="xl"
        icon={<Image src={mail} height="15" width="15" />}
        placeholder="E-mail"
        style={{
          margin: "10px 0",
          width: "50%",
        }}
      />
      <ReservationInput
        // @ts-ignore @TODO - typing
        value={value}
        // @ts-ignore
        setValue={setValue}
        setModalOpened={setModalOpened}
        size="md"
      /> */}
    </ModalContenWrap>
  );
};
