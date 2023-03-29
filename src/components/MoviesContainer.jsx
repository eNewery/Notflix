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
    return <div>
<SearchBar/>
 <div className="movieCardContainer">
    {
       context.search.length === 0 ? context.data.results ? context.data.results.map(item => <MovieCard key={item.id} data={item}/>) : <p>Las peliculas no han sido cargadas correctamente</p>
        : console.log("putoelqlee")
    }
        </div>
        {context.search.length === 0 ?  <div className="pagination">
    <button onClick={previousPage} className="prev-button">Anterior</button>
    <button onClick={nextPage} className="next-button">Siguiente</button>
  </div> : console.log("No se han logrado cargar películas con ese nombre")}
       
    </div>
}