import { useMoviesContext } from "./MoviesState"
import React, { useContext, useEffect, useState } from 'react';
import FavouriteItem from "./FavouriteItem";
import Modal from "./Modal";
const Favourites = () => {
    const context = useMoviesContext()
    const handleClose = () => context.setShowModal(false);


  return (
    <div>
<Modal className="modalContainer" show={context.showModal} handleClose={handleClose}>
      </Modal>
      <div className="movieCardContainer">
{context.datosFav.map(item => (
    
<FavouriteItem movie={item.data}/>
  ))}
  </div>

    </div>
  );
};

export default Favourites;