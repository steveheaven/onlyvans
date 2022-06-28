import * as S from "./styles";
import logoWhite from "public/images/logo-white.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const menuConfig = {
    Domů: "/",
    "Rezervace vozu": "/rezervace",
    "Nabídka vozidel": "/nabidka",
    Ceník: "/cenik",
    Kontakt: "/kontakt",
  };

  const [activeItemIdx, setActiveItemIdx] = useState(0);
  const [navbarBgIsTransparent, setNavbarBgIsTransparent] = useState(true);

  const navRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "10px",
    thresholds: 1,
  };

  const callback = () => {
    // navRef.current.style.backgroundColor = "white";
    // navRef.current.style.color = "black";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (navRef.current) observer.observe(navRef.current);
    return () => {
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, [callback, options]);

  return (
    <S.Wrap ref={navRef}>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "spring" }}
      >
        <Link href="/">
          <S.Logo height={70} width={70} src={logoWhite} />
        </Link>
      </motion.div>
      <S.Menu>
        {Object.entries(menuConfig).map(([key, value], i) => (
          // <Link href="/">
          <S.Item
            key={key}
            active={activeItemIdx === i}
            onClick={() => setActiveItemIdx(i)}
          >
            {key}
          </S.Item>
          // </Link>
        ))}
      </S.Menu>
    </S.Wrap>
  );
};

export default Navbar;
