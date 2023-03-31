import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useMoviesContext } from "./MoviesState";
import favOn from "./images/favon.png"
import favOff from "./images/favoff.png"

export default function ModalContent({data}){
    const context = useMoviesContext();
const [favourite, setFavourite] = useState(false)
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
    }
    
      function setOffFavourite(){
        setFavourite(false)
        
        localStorage.removeItem(data.id)
        const filtered = context.datosFav.filter(item => item.data.id !== data.id);
        context.setDatosFav(filtered)
      }
    
const background = {
    background1: {
    background: `url(https://image.tmdb.org/t/p/w300${data.poster_path})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

}
}
return <section style={background.background1} class="movie-details">

<div class="movie-info">
    <p class="movie-tagline">{data.tagline} {
favourite === false ? <img onClick={() => setOnFavourite()} className="favOff" src={favOff} alt="" /> : <img onClick={() => setOffFavourite()} className="favOff" src={favOn} alt="" />
} </p>
    <p class="movie-genres">
        <strong>Genres:</strong>
  {data.genres ? data.genres.map(genre => (<Link to={`/Category/${genre.id}`}><p>{genre.name}</p></Link>)) : <p>Sin géneros</p>}
    </p>
    <p class="movie-overview">{data.overview}</p>
    <div class="movie-metadata">
        <p class="movie-rating">
            <strong>Rating: </strong>
            {data.vote_average}/10 {data.vote_count} votes
        </p>
        <p class="movie-release-date">
            <strong>Release Date: </strong>
            {data.release_date}
        </p>
        <p class="movie-runtime">
            <strong>Runtime: </strong>
            {data.runtime} minutes
        </p>
        <p class="movie-status">
            <strong>Status: </strong>
            {data.status}
        </p>
    </div>
</div>
</section>
}