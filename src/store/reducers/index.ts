import { combineReducers } from "redux";
import { beerReducer } from "./beerReducer";
import { beerByIdReducer } from "./beerByIdReducer";

export const rootReducer = combineReducers({
  beer: beerReducer,
  beerById: beerByIdReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
