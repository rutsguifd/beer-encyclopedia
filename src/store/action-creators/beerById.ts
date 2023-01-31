import axios from "axios";
import { Dispatch } from "react";
import { BeerByIdAction, BeerByIdActionTypes } from "../../types/beerById";

export const fetchBeerById = (id: string) => {
  return async (dispatch: Dispatch<BeerByIdAction>) => {
    try {
      dispatch({ type: BeerByIdActionTypes.FETCH_BEER_BY_ID });
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers/${id}`
      );
      dispatch({
        type: BeerByIdActionTypes.FETCH_BEER_BY_ID_SUCCESS,
        payload: response.data[0],
      });
    } catch (e) {
      dispatch({
        type: BeerByIdActionTypes.FETCH_BEER_BY_ID_ERROR,
        payload: "oops looks like something went wrong :(",
      });
    }
  };
};
