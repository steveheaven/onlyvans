import { cars } from "src/data/cars";
import { Car } from "./components/Car";
import * as S from "./styles";
import { Modal, Table, Text, useMantineTheme } from "@mantine/core";
import theme from "src/theme";
import Image from "next/image";
import logoBlue from "public/images/logo-blue.svg";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ModalContent } from "./components/ModalContent";
import { FC } from "react";
import { ReservationDate } from "pages";

type Props = {
  reservationDate: ReservationDate;
  setReservationDate: Dispatch<SetStateAction<ReservationDate>>;
};

const Cars: FC<Props> = ({ reservationDate, setReservationDate }) => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(0);

  const elements = [
    { brand: "VW Crafter skříňový", ac: "Ne", tote: "Ne", radio: "Ano" },
    { brand: "Renaul Master skříňový", ac: "Ne", tote: "Ne", radio: "Ano" },
    { brand: "Ford Transit", ac: "Ano", tote: "Ne", radio: "Ano" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.brand}>
      <td>{element.brand}</td>
      <td>{element.ac}</td>
      <td>{element.tote}</td>
      <td>{element.radio}</td>
    </tr>
  ));

  const carsRef = useRef(null);
  let q = gsap.utils.selector(carsRef);

  useEffect(() => {
    gsap.to(q(".card"), {
      scrollTrigger: {
        trigger: "#cars",
      },
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.1,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#cars",
        // start: "top bottom 50%",
        onEnter: () => {
          gsap.set(".cars", {
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
          gsap.set(".cars", {
            color: theme.colors.primary,
            fontWeight: "bold",
          });
        },
        scrub: true,
      },
    });
  }, [q]);

  const manTheme = useMantineTheme();

  return (
    <S.Wrap id="cars">
      <div style={{ display: "flex" }}>
        <S.Text weight={900}>Vozový park</S.Text>{" "}
        <Image height={50} width={50} src={logoBlue} />
      </div>
      <Modal
        opened={modalIsOpened}
        size="lg"
        onClose={() => setModalIsOpened(false)}
        overlayColor={
          manTheme.colorScheme === "dark"
            ? manTheme.colors.dark[9]
            : manTheme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <ModalContent
          carId={selectedCarId}
          setModalOpened={setModalIsOpened}
          reservationDate={reservationDate}
          setReservationDate={setReservationDate}
        />
      </Modal>
      <S.CarsWrap ref={carsRef}>
        {cars.map((car, i) => (
          <Car
            key={car.name}
            metadata={car}
            setModalIsOpen={setModalIsOpened}
            setSelectedCarId={setSelectedCarId}
            id={i}
          />
        ))}
      </S.CarsWrap>

      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Značka</th>
            <th>Klimatizace</th>
            <th>Tažné</th>
            <th>Rádio</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </S.Wrap>
  );
};
export default Cars;
