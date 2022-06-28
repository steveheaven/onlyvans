import "dayjs/locale/cs";
import { FC } from "react";
import * as S from "./styles";
import Image from "next/image";
import circleImage from "public/images/circleImg.png";
import { Button } from "@ui";

const InfoSection: FC = () => (
  <S.Wrap>
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
      >
        Ceník
      </Button>
    </S.TextWrap>
  </S.Wrap>
);

export default InfoSection;
