import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MoviesContext = createContext();
export default function MoviesState({children}){
    const [data, setData] = useState([])
    const [search, setSearch] = useState([]);
    const [categories, setCategories] = useState([])

const [count, setCount] = useState(1)



useEffect(() => {
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US").then(res => res.json()).then(json => setCategories(json))
}, [])

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US&page=${count}`)
      .then(res=>res.json())
      .then(json=>setData(json))
  }, [count])
return <MoviesContext.Provider value={{data, count, setCount, search, setSearch, categories}}>
    {children}
</MoviesContext.Provider>
}
export function useMoviesContext(){
   return useContext(MoviesContext)
}