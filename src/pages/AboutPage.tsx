import { FC } from "react";
import About from "../components/About";
import MainContainer from "../layouts/MainContainerLayout";

const AboutPage: FC = () => {
  return (
    <MainContainer>
      <About />
    </MainContainer>
  );
};

export default AboutPage;
