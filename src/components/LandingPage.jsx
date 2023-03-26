import { useMoviesContext } from "./MoviesState"

export default function LandingPage(){
    const context = useMoviesContext();
    console.log(context.popular1.results)
    console.log(context.popular2.results)
    console.log(context.popular3.results)

    return <div>

    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenido a la página de películas</h1>
        <p>Encuentra tus películas favoritas aquí</p>
        <form className="formLanding">
          <input className="inputSearch" type="text" placeholder="Buscar películas..."/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </section>
  
      <h2 className="title">Películas destacadas</h2>
    <section class="featured">
      <div class="movie-cards">
      {context.data.results ? context.data.results.map(item => <img className="movieImage movieImageSlider" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />) : <p>Las peliculas no han sido cargadas correctamente</p>}
      </div>
    </section>
  
      <h2 className="title">Películas populares</h2>
    <section class="popular">
      <div class="movie-cards">
      {context.data.results ? context.data.results.map(item => <img className="movieImage movieImageSlider" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />) : <p>Las peliculas no han sido cargadas correctamente</p>}

      </div>
    </section>
  
      <h2 className="title">Categorías populares</h2>
    <section class="categories">
      <div class="category-buttons">
    
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