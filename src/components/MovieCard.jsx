import {Link} from "react-router-dom";

export default function MovieCard({data}){
    console.log(data)
    return <div class="movie-card">
        <img className="movieImage" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
    <h2>{data.title} </h2>
    <Link to={`${data.id}`}>
    <button>
    Ver más
    </button>
    </Link>
  </div>
}