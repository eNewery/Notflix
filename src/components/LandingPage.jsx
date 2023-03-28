import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import { useMoviesContext } from "./MoviesState"

export default function LandingPage(){
    const context = useMoviesContext();


    return <div>

    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenido a Notflix</h1>
        <p>Encuentra tus películas favoritas aquí</p>
        <form className="formLanding">
          <input className="inputSearch" type="text" placeholder="Buscar películas..."/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </section>
    <h2 className="title">Categorías populares</h2>
    <section class="categories">
      <div class="category-buttons">
    {context.categories.genres ? context.categories.genres.map(item => (<CategoryItem item={item}/>)) : console.log("Las categorias no se han cargado correctamente")}
      </div>
    </section>
      <h2 className="title">Películas destacadas</h2>
    <section class="featured">
      <div class="movie-cards">
      {context.data.results ? context.data.results.map(item => <Link to={`Movies/${item.id}`}><img className="movieImage movieImageSlider" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" /> </Link>) : <p>Las peliculas no han sido cargadas correctamente</p>}
      </div>
    </section>
  
      <h2 className="title">Películas populares</h2>
    <section class="popular">
      <div class="movie-cards">
      {context.data.results ? context.data.results.map(item => <Link to={`Movies/${item.id}`}><img className="movieImage movieImageSlider" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" /> </Link>) : <p>Las peliculas no han sido cargadas correctamente</p>}

      </div>
    </section>
  

  
    <section class="newsletter">
      <h2 className="title">¡Suscríbete a nuestro boletín!</h2>
      <form action="#">
        <input type="email" placeholder="Tu correo electrónico"/>
        <button type="submit">Suscribirme</button>
      </form>
    </section>
  
    <section class="footer">
      <p>Todos los derechos reservados a Ulises Rodriguez © 2023 Página de películas</p>
      
    </section>
    </div>  
}