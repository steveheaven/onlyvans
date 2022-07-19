import * as S from "./styles";
import logoWhite from "public/images/logo-white.svg";
import logoBlack from "public/images/logo-black.svg";
import { motion } from "framer-motion";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  FC,
  MutableRefObject,
} from "react";
import gsap from "gsap";

type Props = {
  setModalOpened?: Dispatch<SetStateAction<boolean>>;
  logoRef: MutableRefObject<null>;
  isMobile: boolean;
};

const Navbar: FC<Props> = ({ logoRef, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoIsBlack, setLogoIsBlack] = useState(false);

  const intersectingFn = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setLogoIsBlack(!entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const observer = new IntersectionObserver(intersectingFn, options);
    if (logoRef.current) observer.observe(logoRef.current);
    return () => {
      if (logoRef.current) observer.unobserve(logoRef.current);
    };
  }, [logoRef]);

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

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const menuConfig = {
    Služby: "info",
    "Nabídka vozidel": "cars",
    Ceník: "pricelist",
    Kontakt: "contact",
  };

  const [activeItemIdx, setActiveItemIdx] = useState<number | null>(null);

  useEffect(() => {
    gsap.fromTo(
      "#nav",
      {
        backgroundColor: "transparent",
      },
      {
        scrollTrigger: {
          onEnterBack: () => {
            // gsap.set(".navMenu", {
            //   color: "white",
            // });
          },
          trigger: "#navChange",
          scrub: true,
          start: "bottom center",
        },
        duration: 0.5,
        backgroundColor: "white",
        color: "white",
        boxShadow: "5px 6px 14px -8px rgba(0, 0, 0, 0.42)",
        webkitBoxShadow: "5px 6px 14px -8px rgba(0, 0, 0, 0.42)",
      }
    );
  }, []);

  return (
    <S.Wrap id="nav" isMobile={isMobile}>
      {/* @TODO - isMobile should be passed through props as into one component */}
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
            {Object.entries(menuConfig).map(([key, value], i) => (
              <S.Item
                key={key}
                // c={value}
                active={activeItemIdx === i}
                onClick={() => {
                  setActiveItemIdx(i);
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: `#${value}`, offsetY: 80 },
                  });
                }}
              >
                {key}
              </S.Item>
            ))}
            <S.Logo
              src={logoWhite}
              height="40"
              width="40"
              onClick={() =>
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#home", offsetY: 80 },
                })
              }
            />
          </S.Nav>
        </>
      ) : (
        <S.NavWrap>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "spring" }}
          >
            <S.Logo
              src={logoIsBlack ? logoBlack : logoWhite}
              height="70"
              width="70"
              onClick={() =>
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#home", offsetY: 80 },
                })
              }
            />
          </motion.div>
          <S.Menu>
            {Object.entries(menuConfig).map(([key, value], i) => (
              <S.Item
                key={key}
                className={`${value} navMenu`}
                active={activeItemIdx === i}
                onClick={() => {
                  setActiveItemIdx(i);
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: `#${value}`, offsetY: 80 },
                  });
                }}
              >
                {key}
              </S.Item>
            ))}
          </S.Menu>
        </S.NavWrap>
      )}
    </S.Wrap>
  );
};

export default Navbar;
