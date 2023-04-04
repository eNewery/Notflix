import { useMoviesContext } from "./MoviesState";
import SearchItem from "./searchItem";
import Modal from "./Modal";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
export default function SearchBar(){
const context = useMoviesContext();
const [filter, setFilter] = useState(false);
let classFilter = null

filter == false ? classFilter = "filterDeactivated" : classFilter = "filterActivated";

    const apiKey = 'd7214adc4b19c9daf7f6294b411d236d';
const searchButton = document.querySelector('#search-button');
function searchInput(event){
    event.preventDefault();
    const searchInput = document.querySelector('#search-input');
    const query = searchInput.value;
    searchMovies(query);
}
const handleClose = () => context.setShowModal(false);

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
      <Modal className="modalContainer" show={context.showModal} handleClose={handleClose}>
      </Modal>
        <div className="search-bar">
    <form className="searchForm">
    <input onChange={searchInput} type="text" id="search-input" className="searchBar" placeholder="Buscar películas..."/>
    <span onClick={filter === true ? () => setFilter(false) : () => setFilter(true)} class="material-symbols-outlined">
filter_list
</span>
    <button type="submit" id="search-button">Buscar</button>
  </form>
        </div>
<div className={classFilter}>
  <div className="filterActivatedd">
<button type="submit"> Sort by Rate</button>
<button type="submit"> Sort by Date</button>
  </div>

</div>
  <div className="movieCardContainer">
{context.search.length ? context.search.map(item => <MovieCard data={item}/>) : console.log("No hay nada en la barra de búsqueda ")}
  </div>
    </div> 
  
}