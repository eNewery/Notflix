import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useMoviesContext } from "./MoviesState";
import favOn from "./images/favon.png"
import favOff from "./images/favoff.png"

export default function ModalContent({data}){
    const context = useMoviesContext();
const [favourite, setFavourite] = useState(false)
const [genre, setGenre] = useState();


useEffect(() => {
    const apiKey = 'd7214adc4b19c9daf7f6294b411d236d'; // Cambia esto con tu propia clave de API
const language = 'es-ES'; // Cambia esto con el idioma en el que deseas recibir la información
const genreIds = data.genre_ids; // Cambia esto con el nombre de la propiedad que contiene los IDs de género en el objeto que recibes como prop

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${language}&with_genres=${genreIds}`)
    .then(response => response.json())
    .then(data => {
      // Filtrar la lista de géneros para obtener solo los géneros de la película específica
    const movieGenres = data.genres.filter(genre => genreIds.includes(genre.id));

    // Obtener los nombres de los géneros de la película específica
    const genreNames = movieGenres.map(genre => genre.name);
    setGenre(genreNames)
    })
    .catch(error => {
      console.error(error);
    });
}, [data])

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
    <p class="movie-tagline">{data.tagline} </p>
<h1>{data.title}</h1>
    <p class="movie-genres">
        <strong>Genres:</strong>
  {genre ? genre.map(item => (<span>{item}</span>)) : <p>Sin géneros</p>}
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