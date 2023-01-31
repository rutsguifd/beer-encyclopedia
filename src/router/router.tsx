import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import SearchResultPage from "../pages/SearchResultPage";
import BeerInformationPage from "../pages/BeerInformationPage";
import RandomBeerPage from "../pages/RandomBeerPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/search-results",
    element: <SearchResultPage />,
  },
  {
    path: "/beer",
    element: <BeerInformationPage />,
  },
  {
    path: "/random",
    element: <RandomBeerPage />,
  },
]);

export default router;
