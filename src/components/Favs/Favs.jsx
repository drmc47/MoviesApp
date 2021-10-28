import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

function Favs() {
    const favs = useSelector(state => state.favs)
    return (
        favs.length ? 
        <div className="d-flex flex-wrap">
            {favs.map((peli, key) => (
          <Card
          name={peli.Title}
          image={peli.Poster}
          key={key}
          id={peli.imdbID}
          year={peli.Year}
          />
          ))}
        </div>
        : 
        <h1>No favs yet :c</h1>
    )
}

export default Favs
