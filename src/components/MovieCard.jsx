import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import favOff from "./images/favoff.png"
import favOn from "./images/favon.png"
import { useMoviesContext } from "./MoviesState";
import Modal from "./Modal";
export default function MovieCard({data}){
  let [favourite, setFavourite] = useState(false);
  const context = useMoviesContext();
  const movieCard = document.querySelector(".movie-card");
    useEffect(() => {
      const filtered = JSON.parse(localStorage.getItem(data.id));
      filtered ? setFavourite(filtered.favourite) : console.log("No existe")

  }, [])
    function setOnFavourite(){
  setFavourite(true)
  const obj = {
    favourite: true,
    data: data
  }
  context.datosFav.length === 0 ? context.setDatosFav([obj]) : context.setDatosFav([...context.datosFav, obj]);
  const temp = JSON.stringify(obj)
  localStorage.setItem(data.id, temp)
  window.location.reload()
  }

    function setOffFavourite(){
      setFavourite(false)
      
      localStorage.removeItem(data.id)
      const filtered = context.datosFav.filter(item => item.data.id !== data.id);
      context.setDatosFav(filtered)
  window.location.reload()

    }

  function handleShow(){
    context.setShowModal(true); 
    context.setModalData([data]);
  }

    return <div className="movie-card">
      <div>
        <img className="movieImage" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
  {
  favourite === false ? <img onClick={() => setOnFavourite()} className="favOff" src={favOff} alt="" /> : <img onClick={() => setOffFavourite()} className="favOff" src={favOn} alt="" />
  } 

      </div>
        <div className="titleFavorites">
    <h2>{data.title} </h2>
        </div>
    <div>
      <button onClick={handleShow}>Ver más</button>

    </div>
    
  </div>
}