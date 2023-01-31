import * as BeerActionCreators from "./beer";
import * as BeerByIdActionCreators from "./beerById";

export const ActionCreators = {
  ...BeerActionCreators,
  ...BeerByIdActionCreators,
};
