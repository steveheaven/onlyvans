import { StaticImageData } from "next/image";
import fordTransit from "public/images/fordTransit.jpeg";
import vwCrafterBox from "public/images/vwCrafterBox.jpeg";
import vwCrafter from "public/images/vwCrafter.jpeg";
import renaultMasterBox from "public/images/renaultMasterBox.jpeg";
import vw from "public/images/vw.png";
import renault from "public/images/renault.png";
import ford from "public/images/ford.png";

export type CarParams = {
  "Rok Výroby": number;
  Najeto: string;
  Nosnost: string;
  "Ložná plocha": string;
  "Výška nákladového prostoru": string;
};

type PriceList = {
  "1-5 dnů": number;
  "6-14 dní": number;
  "15 dní +": number;
};

interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

export type CarMetadata = {
  img: StaticImageData | string;
  logo: string | StaticImport;
  name: string;
  params: CarParams;
  priceFrom: string;
  priceList?: PriceList;
  deposit?: string;
  aboveLimit?: string;
};

export const cars: CarMetadata[] = [
  // {
  //   img: vwCrafterBox,
  //   logo: vw,
  //   name: "VW Crafter skříň",
  //   params: {
  //     "Rok Výroby": 2016,
  //     Najeto: "290 000 Km",
  //     Nosnost: "800 Kg",
  //     "Ložná plocha": " 5.5 m2",
  //     "Výška nákladového prostoru": "2.2 m",
  //   },
  //   priceFrom: "1500,- Kč/den",
  //   priceList: {
  //     "1-3 dny": "1500,- Kč/den",
  //     "4-7 dní": "1450,- Kč/den",
  //     "8-14 dní": "1400,- Kč/den",
  //     "15 dní +": "1300,- Kč/den",
  //   },
  //   deposit: "10 000",
  //   aboveLimit: "1.50",
  // },
  {
    img: renaultMasterBox,
    logo: renault,
    name: "Renault Master skříňový",
    params: {
      "Rok Výroby": 2015,
      Najeto: "290 000 Km",
      Nosnost: "900 Kg",
      "Ložná plocha": "4,1 x 2,1 x 2,2 m",
      "Výška nákladového prostoru": "2.2 m",
    },
    priceFrom: "Od 1000,- Kč/den",
    priceList: {
      "1-5 dnů": 1200,
      "6-14 dní": 1100,
      "15 dní +": 1000,
    },
    deposit: "10 000",
    aboveLimit: "1",
  },
  // {
  //   img: vwCrafter,
  //   logo: vw,
  //   name: "VW Crafter",
  //   params: {
  //     "Rok Výroby": 2008,
  //     Najeto: "390 000 Km",
  //     Nosnost: "1 100 Kg",
  //     "Ložná plocha": " 5.5 m2",
  //     "Výška nákladového prostoru": "2.2 m",
  //   },
  //   priceFrom: "Od 850,- Kč/den",
  //   priceList: {
  //     "1-3 dny": "1100,- Kč/den",
  //     "4-7 dní": "1000,- Kč/den",
  //     "8-14 dní": "900,- Kč/den",
  //     "15 dní +": "850,- Kč/den",
  //   },
  //   deposit: "5 000",
  //   aboveLimit: "1.00",
  // },
  {
    img: fordTransit,
    logo: ford,
    name: "Ford Transit",
    params: {
      "Rok Výroby": 2013,
      Najeto: "250 000 Km",
      Nosnost: "1 100 Kg",
      "Ložná plocha": "4,0 x 1,7 x 1,8 m",
      "Výška nákladového prostoru": "2.2 m",
    },
    priceFrom: "Od 900,- Kč/den",
    priceList: {
      "1-5 dnů": 1000,
      "6-14 dní": 900,
      "15 dní +": 800,
    },
    deposit: "5 000",
    aboveLimit: "1.00",
  },
];
