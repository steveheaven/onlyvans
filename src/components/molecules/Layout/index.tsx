import { FC, ReactNode } from "react";
import { NextSeo } from "next-seo";
import * as S from "./styles";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  margin: string;
};

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

const Layout: FC<Props> = ({ children, title, description, margin }) => (
  <>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    <S.Wrap
      initial="hidden"
      animate="enter"
      exit="exit"
      // variants={variants}
      transition={{ type: "linear" }}
      margin={margin}
    >
      {children}
    </S.Wrap>
  </>
);

export default Layout;
