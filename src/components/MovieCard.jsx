export default function MovieCard({data}){
    console.log(data)
    return <div className="movieCard">
        <h3>
{data.title}

        </h3>
        <img className="movieImage" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
    </div>
}