import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "@ui";
import { ThemeProvider } from "styled-components";
import theme from "src/theme";
import { Hero } from "@ui";
import Info from "src/components/sections/Info";
import CarsOffer from "src/components/sections/Cars";
import Pricelist from "src/components/sections/PriceList";
import Contact from "src/components/sections/Contact";

const Home: NextPage = () => {
  const title = "OnlyVans dodávky";
  const subtitle = "Půjčovna dodávek OnlyVans - Ústí nad Labem";
  const contentMargin = "0 10%";
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Hero margin={contentMargin} />
        <Layout
          margin={contentMargin}
          title="OnlyVans"
          description={`${title} - ${subtitle}`}
        >
          {/* Sections */}
          <Info />
          <CarsOffer />
          <Pricelist />
          <Contact />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default Home;
