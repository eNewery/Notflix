import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMoviesContext } from './MoviesState';
const FavouriteItem = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
const context = useMoviesContext();

function handleShow(){
  context.setShowModal(true); 
  context.setModalData([movie]);
}

  return (

<div className='movie-card'>
      <img className="movieImage" src={imageURL} alt={movie.title} />
      <div className="details">
        <h3>{movie.title}</h3>
        <p className="tagline">{movie.tagline}</p>
        <p className="release-date">Release Date: {movie.release_date}</p>
        <p className="rating">Rating: {movie.vote_average}</p>
        <button onClick={handleShow}>Ver más</button>



  
      </div>
</div>

  );
};

export default FavouriteItem;
