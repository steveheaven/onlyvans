import type { NextPage } from "next";
import Head from "next/head";
import { Layout, Navbar } from "@ui";
import { ThemeProvider } from "styled-components";
import theme from "src/theme";
import { Hero } from "@ui";
import gsap from "gsap";
import { Modal } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
const scrollTrigger = require("../node_modules/gsap/ScrollTrigger");
const scrollToPlugin = require("../node_modules/gsap/ScrollToPlugin");
import emailjs from "@emailjs/browser";
import { email } from "src/config";
import { NotificationsProvider } from "@mantine/notifications";
import dynamic from "next/dynamic";

const Pricelist = dynamic(() => import("src/components/sections/PriceList"));
const Contact = dynamic(() => import("src/components/sections/Contact"));
const Cars = dynamic(() => import("src/components/sections/Cars"));
const Info = dynamic(() => import("src/components/sections/Info"));

export type ReservationDate = [Date | null, Date | null];

const Home: NextPage = () => {
  const logoRef = useRef(null);
  const title = "OnlyVans dodávky";
  const subtitle = "Půjčovna dodávek OnlyVans - Ústí nad Labem";
  const contentMargin = "0 10%";

  const today = new Date();
  const tomorrow = new Date(new Date().setDate(today.getDate() + 1) + 1000);

  const [reservationDate, setReservationDate] = useState<ReservationDate>([
    today,
    tomorrow,
  ]);
  const [opened, setOpened] = useState(false);

  // @TODO: Create some simpler config function to keep the code of gsap concise
  gsap.registerPlugin(scrollTrigger, scrollToPlugin);
  emailjs.init(email.USER_ID);

  const [width, setWidth] = useState(1000);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  const isMobile = width < 900;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <NotificationsProvider>
          {/* Create a factory function for sections to keep the code DRY */}
          <Navbar
            setModalOpened={setOpened}
            logoRef={logoRef}
            isMobile={isMobile}
          />
          <Hero
            isMobile={isMobile}
            margin={contentMargin}
            setModalOpened={setOpened}
            logoRef={logoRef}
            reservationDate={reservationDate}
            setReservationDate={setReservationDate}
          />
          <Layout
            margin={contentMargin}
            title="OnlyVans"
            description={`${title} - ${subtitle}`}
          >
            {/* Sections */}
            <Info />
            <Cars
              reservationDate={reservationDate}
              setReservationDate={setReservationDate}
            />
            <Pricelist isMobile={isMobile} />
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
        </NotificationsProvider>
      </ThemeProvider>
    </>
  );
};

export default Home;
