import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MoviesContext = createContext();
export default function MoviesState({children}){
    const [data, setData] = useState([])
    const [search, setSearch] = useState([]);
    const [categories, setCategories] = useState([])
    let [favouriteData, setFavouriteData] = useState([])

const [count, setCount] = useState(1)
function initializeFavorites() {
    // Obtener las claves del localStorage
    const keys = Object.keys(localStorage);
  
    // Verificar si hay alguna clave con un objeto no vacío
    const hasNonEmptyObject = keys.some((key) => {
      const value = localStorage.getItem(key);
      return value && value !== "null" && value !== "undefined" && JSON.parse(value) !== null;
    });
  
    // Si hay al menos un objeto no vacío, entonces inicializar los estados favoritos
    if (hasNonEmptyObject) {
      keys.forEach((key) => {
        const value = localStorage.getItem(key);
        if (value && value !== "null" && value !== "undefined") {
          const parsedValue = JSON.parse(value);
          setFavouriteData([parsedValue]);
        }
      });
    }
  }
  useEffect(() => {
      initializeFavorites()
}, [])

useEffect(() => {
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US").then(res => res.json()).then(json => setCategories(json))
}, [])

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US&page=${count}`)
      .then(res=>res.json())
      .then(json=>setData(json))

  }, [count])
return <MoviesContext.Provider value={{data, count, setCount, search, setSearch, categories, setFavouriteData, favouriteData}}>
    {children}
</MoviesContext.Provider>
}
export function useMoviesContext(){
   return useContext(MoviesContext)
}