import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'
function Card({name, image, id}) {
    return (
        <div>
             <Link to ={{
            pathname: '/detail',
            search: `${id}`
        }}>
            <h1>{name}</h1>
            </Link>
            <img src={image} alt="img not found" className='cardImage'/>
        </div>
    )
}

export default Card
