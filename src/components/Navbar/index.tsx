import * as S from "./styles";
import logoWhite from "public/images/logo-white.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-90vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

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

  // const navRef = useRef(null);

  // const options = {
  //   root: null,
  //   rootMargin: "10px",
  //   thresholds: 1,
  // };

  // const callback = () => {
  //   // navRef.current.style.backgroundColor = "white";
  //   // navRef.current.style.color = "black";
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callback, options);
  //   if (navRef.current) observer.observe(navRef.current);
  //   return () => {
  //     if (navRef.current) observer.unobserve(navRef.current);
  //   };
  // }, [callback, options]);

  const [width, setWidth] = useState(1000);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    console.log(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const isMobile = width < 900;

  return (
    <S.Wrap>
      {isMobile ? (
        <>
          <S.Header>
            <S.SvgBox
              variants={iconVariants}
              animate={isOpen ? "opened" : "closed"}
              whileHover={{ scale: 1.4 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                  fill="#fff"
                />
              </svg>
            </S.SvgBox>
          </S.Header>

          <S.Nav
            initial={false}
            variants={menuVariants}
            animate={isOpen ? "opened" : "closed"}
          >
            <S.Link variants={linkVariants}>home</S.Link>
            <S.Link variants={linkVariants}>about</S.Link>
            <S.Link variants={linkVariants}>gallery</S.Link>
          </S.Nav>
        </>
      ) : (
        <>
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
        </>
      )}
    </S.Wrap>
  );
};

export default Navbar;
