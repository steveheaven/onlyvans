import type { NextPage } from "next";
import Head from "next/head";
import { Layout, Navbar } from "@ui";
import { ThemeProvider } from "styled-components";
import theme from "src/theme";
import { Hero } from "@ui";
import Info from "src/components/sections/Info";
import CarsOffer from "src/components/sections/Cars";
import Pricelist from "src/components/sections/PriceList";
import Contact from "src/components/sections/Contact";
import gsap from "gsap";
import { Modal } from "@mantine/core";
import { useRef, useState } from "react";
const scrollTrigger = require("../node_modules/gsap/ScrollTrigger");
const scrollToPlugin = require("../node_modules/gsap/ScrollToPlugin");
// const Power4 = require("../node_modules/gsap/");

const Home: NextPage = () => {
  const [opened, setOpened] = useState(false);
  const logoRef = useRef(null);
  const title = "OnlyVans dodávky";
  const subtitle = "Půjčovna dodávek OnlyVans - Ústí nad Labem";
  const contentMargin = "0 10%";

  gsap.registerPlugin(scrollTrigger, scrollToPlugin);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar setModalOpened={setOpened} logoRef={logoRef} />
        <Hero
          margin={contentMargin}
          setModalOpened={setOpened}
          logoRef={logoRef}
        />
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
        <Modal
          transition="fade"
          transitionDuration={600}
          transitionTimingFunction="ease"
          opened={opened}
          centered
          onClose={() => setOpened(false)}
        >
          Content
        </Modal>
      </ThemeProvider>
    </>
  );
};

export default Home;
