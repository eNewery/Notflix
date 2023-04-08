import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import { useMoviesContext } from "./MoviesState"

export default function LandingPage(){
    const context = useMoviesContext();
    function handleShow(data){
      context.setShowModal(true); 
      context.setModalData([data]);
    } 

    return <div>

    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenido a <span className="notflixTitle">Notflix</span></h1>
        <p>Encuentra tus películas favoritas aquí</p>
        <form className="formLanding">
          <input className="inputSearch" type="text" placeholder="Buscar películas..."/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </section>
    <div className="landingSectionsContainer">

    <section class="categories">
    <h2 className="title">Categorías populares</h2>
      <div class="category-buttons">
    {context.categories.genres ? context.categories.genres.map(item => (<CategoryItem key={item.id} item={item} name={item.name}/>)) : console.log("Las categorias no se han cargado correctamente")}
      </div>
    </section>
    <section class="featured">
      <h2 className="title">Películas destacadas</h2>
      <div class="movie-cards">
      {context.data.results ? context.data.results.map(item => <button key={item.id} onClick={() => handleShow(item)} className="linkMovies"><img className="movieImage movieImageSlider" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" /><div className="movieSliderTitleContainer"><h5 className="movieSliderTitle">{item.title}</h5></div></button>) : <p>Las peliculas no han sido cargadas correctamente</p>}
      </div>
    </section>
  
    <section class="popular">
      <h2 className="title">Películas populares</h2>
      <div class="movie-cards">
      {context.data.results ? context.data.results.map(item => <button key={item.id} onClick={() => handleShow(item)} className="linkMovies"><img className="movieImage movieImageSlider" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" /><div className="movieSliderTitleContainer"><h5 className="movieSliderTitle">{item.title}</h5></div></button>) : <p>Las peliculas no han sido cargadas correctamente</p>}

      </div>
    </section>
  

  
    <section class="newsletter">
      <h2 className="title">¡Suscríbete a nuestro boletín!</h2>
      <form action="#">
        <input type="email" placeholder="Tu correo electrónico"/>
        <button type="submit">Suscribirme</button>
      </form>
    </section>
    </div>
  
    </div>  
}