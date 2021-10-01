import React from 'react'
import './Card.css'
function Card({name, image}) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="img not found" className='cardImage'/>
        </div>
    )
}

export default Card
