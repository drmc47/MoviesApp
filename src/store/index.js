import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { ADD_FAV } from '../actions'


const initialState = {
    favs: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV: 
        return {
            ...state,
            favs : state.favs.concat(action.payload)
        }

        default:
            return state
        }
    }
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;