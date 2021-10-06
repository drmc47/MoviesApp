import axios from 'axios'
import React, { useState } from 'react'
import Card from '../Card/Card';


function Home() {
    const [movies, setmovies] = useState([])
    const [input, setinput] = useState('')

    
//     useEffect(() => {
//         axios.get('https://www.omdbapi.com/?s=star%20wars&type=movie&page=1&apikey=a99b2602')
//     .then(response => {
//         setmovies(response.data.Search)
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }, [])

let handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://www.omdbapi.com/?s=${encodeURI(input)}&type=movie&page=1&apikey=a99b2602`)
    .then(response => {
        setmovies(response.data.Search)
        console.log(movies)
    })
    .catch(error => {
        console.log(error)
    })

}
let handleChange = (e) => {
    setinput(e.target.value)  
}
return (

    movies.length ? 
    <div>
            <div>
      <form onSubmit={(e) => handleSubmit(e)} className='theForm'>
        <label>
      Search movie: 
      <input type="text" name="name" placeholder='keyword...' onChange={(e) => handleChange(e)} className='inputSearch' value={input}/>
     <button type='submit'>Search</button>
        </label>
        </form>
    
    </div>

 {    movies.map((peli, key)=> <Card
        name={peli.Title}
        image={peli.Poster}
        key={key} 
        id={peli.imdbID}
         /> )      
}
    </div>
    : 
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className='theForm'>
        <label>
      Search movie: 
      <input type="text" name="name" placeholder='keyword...' onChange={(e) => handleChange(e)} className='inputSearch' value={input}/>
     <button type='submit'>Search</button>
        </label>
        </form>
    
    </div>
    )
}

export default Home

//apiKey=a99b2602