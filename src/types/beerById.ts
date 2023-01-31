import { IBeer } from "./modules/IBeer";

export interface BeerByIdState {
  beer: IBeer;
  loading: boolean;
  error: string | null;
}

export enum BeerByIdActionTypes {
  FETCH_BEER_BY_ID = "FETCH_BEER_BY_ID",
  FETCH_BEER_BY_ID_SUCCESS = "FETCH_BEER_BY_ID_SUCCESS",
  FETCH_BEER_BY_ID_ERROR = "FETCH_BEER_BY_ID_ERROR",
}

interface fetchBeerById {
  type: BeerByIdActionTypes.FETCH_BEER_BY_ID;
}
interface fetchBeerByIdSuccess {
  type: BeerByIdActionTypes.FETCH_BEER_BY_ID_SUCCESS;
  payload: IBeer;
}
interface fetchBeerByIdError {
  type: BeerByIdActionTypes.FETCH_BEER_BY_ID_ERROR;
  payload: string;
}

export type BeerByIdAction =
  | fetchBeerById
  | fetchBeerByIdSuccess
  | fetchBeerByIdError;
