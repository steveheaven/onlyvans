import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

const Button = styled.button`
  font-size: 25px;
  background-color: rgb(68, 109, 246);
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 25px;

  margin: 0 10px;
`;

const MotionBox = styled(motion.div)`
  background-color: rgb(172, 236, 161);
  border-radius: 15px;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

const TestComp = ({ bg }: { bg: string }) => (
  <MotionBox
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    style={{
      background: bg,
    }}
  />
);

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    page > 3 && setPage([1, 1]);
  }, [page]);
  return (
    <>
      <div style={{ position: "relative", height: "300px", width: "300px" }}>
        <AnimatePresence initial={false} custom={direction}>
          {page === 1 && <TestComp key="0" bg="rgb(171, 135, 255)" />}
          {page === 2 && <TestComp key="1" bg="rgb(68, 109, 246)" />}
          {page === 3 && <TestComp key="2" bg="rgb(172, 236, 161)" />}
        </AnimatePresence>
      </div>

      <Row>
        <Button className="prev" onClick={() => paginate(-1)}>
          {"prev"}
        </Button>

        <Text>{page}</Text>
        <Button className="next" onClick={() => paginate(1)}>
          {"next"}
        </Button>
      </Row>
    </>
  );
};
