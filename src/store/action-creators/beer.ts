import axios from "axios";
import { Dispatch } from "react";
import { BeerAction, BeerActionTypes } from "../../types/beer";
import { beersPerPage } from "../../utils/consts";

export const fetchBeer = (beerName: string, page: string = "1") => {
  return async (dispatch: Dispatch<BeerAction>) => {
    try {
      dispatch({ type: BeerActionTypes.FETCH_BEER });
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers?beer_name=${beerName}&page=${page}&per_page=${beersPerPage}`
      );
      dispatch({
        type: BeerActionTypes.FETCH_BEER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: BeerActionTypes.FETCH_BEER_ERROR,
        payload: "oops looks like something went wrong :(",
      });
    }
  };
};
