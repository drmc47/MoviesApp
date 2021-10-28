import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite } from "../../actions";
import "./Card.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components'


function Card({ name, image, id, year}) {
  const dispatch = useDispatch();
  let addFav = () => {
    dispatch(addFavourite(id))
    alert('ADDED!')
  }
  return (
    <div className=" d-flex m-3">
      <img src={image} alt="img not found" className="cardImage" />
      <Title
        className="text-white text-decoration-none position-absolute text-title  text-center"
        to={{
          pathname: "/detail",
          search: `${id}`,
        }}
      >
        <MovieName>{name}</MovieName>
      </Title>
        <Like onClick={() => addFav()}/>
    </div>
  );
}

const Title = styled(Link)`
  border-radius: 5px 5px 0px 0px;
  padding-top: 5px;
  
`
const MovieName = styled.h2`
  font-size: 20px;
`
const Like = styled(FavoriteIcon)`
  font-size: 5rem;
`

export default Card;
