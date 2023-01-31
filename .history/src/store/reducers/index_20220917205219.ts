import { combineReducers } from "redux";
import { beerReducer } from "./beerReducer";


export const rootReducer = combineReducers({
    beer: beerReducer,
})

export type RootState = ReturnType<typeof rootReducer>