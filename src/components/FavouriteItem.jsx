import React from 'react';

const FavouriteItem = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <div className="item-container">
      <img className="poster" src={imageURL} alt={movie.title} />
      <div className="details">
        <h3 className="title">{movie.title}</h3>
        <p className="tagline">{movie.tagline}</p>
        <p className="release-date">Release Date: {movie.release_date}</p>
        <p className="rating">Rating: {movie.vote_average}</p>
        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default FavouriteItem;
