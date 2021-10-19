import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

function Favs() {
    const favs = useSelector(state => state.favs)
    return (
        favs.length ? 
        <div>
            {favs.map((peli, key) => (
          <Card
            name={peli.name}
            image={peli.image}
            key={key}
            id={peli.id}
          />
          ))}
        </div>

        : 
        <h1>No favs yet :c</h1>
    )
}

export default Favs
