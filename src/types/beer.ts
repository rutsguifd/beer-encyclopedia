import { IBeer } from "./modules/IBeer";


export interface BeerState {
    beers: IBeer[];
    loading: boolean;
    error: string | null;
}


export enum BeerActionTypes {
    FETCH_BEER = 'FETCH_BEER',
    FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS',
    FETCH_BEER_ERROR = 'FETCH_BEER_ERROR',
}

interface fetchBeer {
    type: BeerActionTypes.FETCH_BEER;
}
interface fetchBeerSuccess {
    type: BeerActionTypes.FETCH_BEER_SUCCESS;
    payload: IBeer[];
}
interface fetchBeerError {
    type: BeerActionTypes.FETCH_BEER_ERROR;
    payload: string;
}

export type BeerAction = fetchBeer | fetchBeerSuccess | fetchBeerError