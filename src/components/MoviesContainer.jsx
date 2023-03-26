import MovieCard from "./MovieCard";
import { useMoviesContext } from "./MoviesState"

export default function MoviesContainer(){
    const context = useMoviesContext();
    function previousPage(){
        context.count > 1 ? context.setCount(context.count - 1) : console.log("Count es 1")
    }
    function nextPage(){
        context.setCount(context.count + 1)
    }
    console.log(context.data.results)
    return <div>
        <div className="movieCardContainer">
        {context.data.results ? context.data.results.map(item => <MovieCard data={item}/>) : <p>Las peliculas no han sido cargadas correctamente</p>}
        </div>
<button onClick={previousPage}>Previous Page</button>

<button onClick={nextPage}>Next Page</button>
    </div>
}