import { cars } from "src/data/cars";
import { Car } from "./Car";
import * as S from "./styles";
import { Table, Text } from "@mantine/core";
import theme from "src/theme";
import Image from "next/image";
import logoBlue from "public/images/logo-blue.svg";
export default function Cars() {
  const elements = [
    { brand: "VW Crafter skříňový", ac: "Ne", tote: "Ne", radio: "Ano" },
    { brand: "Renaul Master skříňový", ac: "Ne", tote: "Ne", radio: "Ano" },
    { brand: "VW Crafter L4H2", ac: "Ne", tote: "Ano", radio: "Ne" },
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
  return (
    <S.Wrap>
      <div style={{ display: "flex" }}>
        <Text
          weight={900}
          style={{
            fontSize: "4em",
            color: theme.colors.secondaryDark,
            marginRight: "40px",
          }}
        >
          Vozový park
        </Text>{" "}
        <Image height={100} width={100} src={logoBlue} />
      </div>

      <S.CarsWrap>
        {cars.map((car) => (
          <Car key={car.name} metadata={car} />
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
}
