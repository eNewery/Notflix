import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MovieCard from "./MovieCard";
import { useMoviesContext } from "./MoviesState"
import Modal from "./Modal";

export default function CategoryContainer({name}){
    const [categoriesData, setCategoriesData] = useState([]);
    const [count, setCount] = useState(1);
    const context = useMoviesContext();

const id = useParams()

    const handleClose = () => context.setShowModal(false);

    function previousPage(){
        count > 1 ? setCount(count - 1) : console.log("Count es 1")
    }
    function nextPage(){
        setCount(   count + 1)
    }
    useEffect(() => {
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d7214adc4b19c9daf7f6294b411d236d&language=es&with_genres=${id.name}&page=${count}`).then(res => res.json()).then(data => setCategoriesData(data))
}, [count])
console.log(name)
    return <div>
{context.categoryTitle === "" ? console.log("") : <h1 className="title">{context.categoryTitle}</h1>}
    <div className="movieCardContainer">
      <Modal className="modalContainer" show={context.showModal} handleClose={handleClose}>
      </Modal>
   {categoriesData.results ? categoriesData.results.map(item => <MovieCard data={item}/>) : console.log("No se han podido cargar las películas con esa categoría")}
   <div class="pagination">
    <button onClick={previousPage} class="prev-button">Anterior</button>
    <button onClick={nextPage} class="next-button">Siguiente</button>
  </div> 
  </div>
    </div>
}