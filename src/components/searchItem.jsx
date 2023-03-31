import { useMoviesContext } from "./MoviesState"
import favOff from "./images/favoff.png"
import favOn from "./images/favon.png"
import { useEffect, useState } from "react"

export default function SearchItem({data}){  
  const context = useMoviesContext()
  let [favourite, setFavourite] = useState(false);

    
    return <div class="search-item">
    
      <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.release_date}</p>
    </div>

}