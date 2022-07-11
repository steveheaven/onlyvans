import type { NextPage } from "next";
import Head from "next/head";
import { Layout, Navbar } from "@ui";
import { ThemeProvider } from "styled-components";
import theme from "src/theme";
import { Hero } from "@ui";
import Info from "src/components/sections/Info";
import { Cars } from "src/components/sections/Cars";
import Pricelist from "src/components/sections/PriceList";
import Contact from "src/components/sections/Contact";
import gsap from "gsap";
import { Modal } from "@mantine/core";
import { useRef, useState } from "react";
const scrollTrigger = require("../node_modules/gsap/ScrollTrigger");
const scrollToPlugin = require("../node_modules/gsap/ScrollToPlugin");
import emailjs from "@emailjs/browser";
import { email } from "src/config";
import { NotificationsProvider } from "@mantine/notifications";

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

  gsap.registerPlugin(scrollTrigger, scrollToPlugin);
  emailjs.init(email.USER_ID);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <NotificationsProvider>
          <Navbar setModalOpened={setOpened} logoRef={logoRef} />
          <Hero
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
        </NotificationsProvider>
      </ThemeProvider>
    </>
  );
};

export default Home;
