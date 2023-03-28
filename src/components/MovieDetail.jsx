import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function MovieDetail() {
    const [data, setData] = useState({
})
    const id = useParams();

    useEffect(() => {
        const apiKey = "d7214adc4b19c9daf7f6294b411d236d"
        const movieId = id.id;

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(res => setData(res))
    }, [])
    return <section class="movie-details">
        <div class="movie-poster">
            <img class="movie-poster" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
        </div>
        <div class="movie-info">
            <h2 class="movie-title">{data.title}</h2>
            <p class="movie-tagline">{data.tagline}</p>
            <p class="movie-genres">
                <strong>Genres:</strong>
          {data.genres ? data.genres.map(genre => (<p>{genre.name}</p>)) : <p>Sin géneros</p>}
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