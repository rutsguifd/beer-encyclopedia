import { type } from "os";


interface IBeer {
    id: number;

}

interface BeerState {
    beers: IBeer[];
    loading: boolean;
    error: string | null;
}

const initialState: BeerState = {
    beers: [],
    loading: false,
    error: null,
}

enum BeerActionTypes {
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

type BeerAction = fetchBeer | fetchBeerSuccess | fetchBeerError

export const beerReducer = (state = initialState, action: BeerAction): BeerState => {
    switch(action.type){
        case BeerActionTypes.FETCH_BEER:
            return {...state, loading: true}
        case BeerActionTypes.FETCH_BEER_SUCCESS:
            return {...state, beers: action.payload, loading: false}
        case BeerActionTypes.FETCH_BEER_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return {...state}
    }
}