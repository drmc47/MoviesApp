import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

function Home() {
    const [movies, setmovies] = useState([])
    
    useEffect(() => {
        axios.get('https://www.omdbapi.com/?s=star%20wars&type=movie&page=1&apikey=a99b2602')
    .then(response => {
        setmovies(response.data.Search)
    })
    .catch(error => {
        console.log(error)
    })
}, [])
console.log(movies);
return (
        movies.length ? 
        <div>
            {movies.map((peli,i)=> <Card key={i}
            name={peli.Title}
            image={peli.Poster}
            />)}
        </div>
        : 
        <h1>CARGANDOO</h1>

    )
}

export default Home

//apiKey=a99b2602