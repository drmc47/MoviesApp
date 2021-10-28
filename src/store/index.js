import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { ADD_FAV, SEARCH_MOVIE } from '../actions'


const initialState = {
    movies: [],
    favs: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV: 
        let found = state.favs.find((peli)=>peli.imdbID===action.payload);
        if (!found) {
            let movie = state.movies.find(peli=> peli.imdbID === action.payload)
            return {
                ...state,
                favs : state.favs.concat(movie)
            }
        }
        return {
            ...state,
            favs: state.favs.filter(peli=> peli.imdbID!==found.imdbID )
        }

        case SEARCH_MOVIE: 

        return {
            ...state,
            movies : action.payload
        }
        
        default:
            return state
        }
    }
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;