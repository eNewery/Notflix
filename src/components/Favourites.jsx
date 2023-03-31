import { useMoviesContext } from "./MoviesState"
import React, { useContext, useEffect, useState } from 'react';
import FavouriteItem from "./FavouriteItem";

const Favourites = () => {
    const context = useMoviesContext()

  return (
    <div className="movieCardContainer">
{context.datosFav.map(item => (
    <FavouriteItem movie={item.data}/>
))}
    </div>
  );
};

export default Favourites;