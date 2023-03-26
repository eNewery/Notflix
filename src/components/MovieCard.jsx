export default function MovieCard({data}){
    console.log(data)
    return <div class="movie-card">
        <img className="movieImage" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
    <h2>{data.title} </h2>
    <button>Ver más</button>
  </div>
}