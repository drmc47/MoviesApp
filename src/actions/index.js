import axios from "axios"

export const ADD_FAV = 'ADD_FAV';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';


export const addFavourite = (payload) => ({
    type: ADD_FAV,
    payload
})

export const searchMovie = (payload) => {
    return (dispatch) => {
        axios.get(`https://www.omdbapi.com/?s=${encodeURI(payload)}&type=movie&page=1&apikey=a99b2602`)
      .then((response) => {
          response.data.Error ? alert(response.data.Error) : 
          dispatch({
             type: SEARCH_MOVIE,
             payload: response.data.Search 
          })
      })
      .catch((error) => {
        console.log(error);
      });
    }
}

