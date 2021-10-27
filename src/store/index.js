import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { ADD_FAV } from '../actions'


const initialState = {
    favs: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV: 
        let found = state.favs.find((peli)=>peli.id===action.payload.id);
        if (!found) {
            return {
                ...state,
                favs : state.favs.concat(action.payload)
            }
        }
        return {
            ...state,
            favs: state.favs.filter(peli=> peli.id!==found.id )
        }

        default:
            return state
        }
    }
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;