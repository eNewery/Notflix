import MovieCard from "./MovieCard";
import { useMoviesContext } from "./MoviesState"
import SearchBar from "./SearchBar";
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
<SearchBar/>
 <div className="movieCardContainer">
    {
       context.search.length === 0 ? context.data.results ? context.data.results.map(item => <MovieCard data={item}/>) : <p>Las peliculas no han sido cargadas correctamente</p>
        : console.log("putoelqlee")
    }
        </div>
        {context.search.length === 0 ?  <div class="pagination">
    <button onClick={previousPage} class="prev-button">Anterior</button>
    <button onClick={nextPage} class="next-button">Siguiente</button>
  </div> : console.log("Putoelqlee")}
       
    </div>
}