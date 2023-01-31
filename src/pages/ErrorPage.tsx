import { FC } from "react";
import Error from "../components/Error";
import MainContainer from "../layouts/MainContainerLayout";

const ErrorPage: FC = () => {
  return (
    <MainContainer>
      <Error />
    </MainContainer>
  );
};

export default ErrorPage;
