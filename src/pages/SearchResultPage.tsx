import { FC } from "react";
import SearchResults from "../components/SearchResults";
import MainContainer from "../layouts/MainContainerLayout";

const SearchResultPage: FC = () => {
  return (
    <MainContainer>
      <SearchResults />
    </MainContainer>
  );
};

export default SearchResultPage;
