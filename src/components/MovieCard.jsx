import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import favOff from "./images/favoff.png"
import favOn from "./images/favon.png"
import { useMoviesContext } from "./MoviesState";

export default function MovieCard({data}){
  let [favourite, setFavourite] = useState(false);
  const context = useMoviesContext();

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
context.favouriteData.length === 0 ? context.setFavouriteData([obj]) : context.setFavouriteData([...context.favouriteData, obj]);
const temp = JSON.stringify(obj)
localStorage.setItem(data.id, temp)
}

  function setOffFavourite(){
    setFavourite(false)
    const filtered = context.favouriteData.filter(item => item.id !== data.id); 
    context.setFavouriteData(filtered)
    localStorage.removeItem(data.id)
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
    <Link to={`/Movies/${data.id}`}>
    <button>
    Ver más
    </button>
    </Link>
  </div>
}