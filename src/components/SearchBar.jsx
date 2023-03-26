import { useMoviesContext } from "./MoviesState";
import SearchItem from "./searchItem";

export default function SearchBar(){
const context = useMoviesContext();
    const apiKey = 'd7214adc4b19c9daf7f6294b411d236d';
const searchButton = document.querySelector('#search-button');
function searchInput(event){
    event.preventDefault();
    const searchInput = document.querySelector('#search-input');
    const query = searchInput.value;
    searchMovies(query);
}

function searchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&limit=5&query=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        context.setSearch(results)
        });
  }
  
  
    return <div>
        <div className="search-bar">
    <form>
    <input onChange={searchInput} type="text" id="search-input" className="searchBar" placeholder="Buscar películas..."/>
    <button type="submit" id="search-button">Buscar</button>
  </form>
        </div>
  <div className="search-results">
{context.search.length ? context.search.map(item => <SearchItem data={item}/>) : console.log("putoelqlee")}
  </div>
    </div> 
  
}