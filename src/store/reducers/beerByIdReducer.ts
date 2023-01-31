import {
  BeerByIdAction,
  BeerByIdActionTypes,
  BeerByIdState,
} from "../../types/beerById";
import { IBeer } from "../../types/modules/IBeer";

const initialState: BeerByIdState = {
  beer: {} as IBeer,
  loading: false,
  error: null,
};

export const beerByIdReducer = (
  state = initialState,
  action: BeerByIdAction
): BeerByIdState => {
  switch (action.type) {
    case BeerByIdActionTypes.FETCH_BEER_BY_ID:
      return { ...state, loading: true };
    case BeerByIdActionTypes.FETCH_BEER_BY_ID_SUCCESS:
      return { ...state, beer: action.payload, loading: false };
    case BeerByIdActionTypes.FETCH_BEER_BY_ID_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
