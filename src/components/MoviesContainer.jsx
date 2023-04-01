import MovieCard from "./MovieCard";
import { useMoviesContext } from "./MoviesState"
import SearchBar from "./SearchBar";
import React, { useState } from 'react';
import Modal from "./Modal";
export default function MoviesContainer(){
    const context = useMoviesContext();

    const handleClose = () => context.setShowModal(false);

    const handleShow = () => context.setShowModal(true);
  
    function previousPage(){
        context.count > 1 ? context.setCount(context.count - 1) : console.log("Count es 1")
    }
    function nextPage(){
        context.setCount(context.count + 1)
    }
    return <div>
<SearchBar/>
<Modal className="modalContainer" show={context.showModal} handleClose={handleClose}>
      </Modal>
 <div className="movieCardContainer">


  



    {
       context.search.length === 0 ? context.data.results ? context.data.results.map(item => <MovieCard key={item.id} data={item}/>) : <p>Las peliculas no han sido cargadas correctamente</p>
        : console.log("putoelqlee")
    }
        </div>
        {context.search.length === 0 ?  <div className="pagination">
    <button onClick={previousPage} className="prev-button">Anterior</button>
    <button onClick={nextPage} className="next-button">Siguiente</button>
  </div> : console.log("No se han logrado cargar películas con ese nombre")}
       
    </div>
}