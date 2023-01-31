import { BeerAction, BeerActionTypes, BeerState } from "../../types/beer"


const initialState: BeerState = {
    beers: [],
    loading: false,
    error: null,
}
export const beerReducer = (state = initialState, action: BeerAction): BeerState => {
    switch(action.type){
        case BeerActionTypes.FETCH_BEER:
            return {...state, loading: true}
        case BeerActionTypes.FETCH_BEER_SUCCESS:
            return {...state, beers: action.payload, loading: false}
        case BeerActionTypes.FETCH_BEER_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state
    }
}