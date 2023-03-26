import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MoviesContext = createContext();
export default function MoviesState({children}){
    const [data, setData] = useState([])
    const [search, setSearch] = useState([]);
const [popular1, setPopular1] = useState([]);
const [popular2, setPopular2] = useState([]);
const [popular3, setPopular3] = useState([]);
const [count, setCount] = useState(1)


useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US&page=3`)
    .then(res=>res.json())
    .then(json=>setPopular1(json))
}, [])
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US&page=2`)
    .then(res=>res.json())
    .then(json=>setPopular2(json))
}, [])
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US&page=4`)
    .then(res=>res.json())
    .then(json=>setPopular3(json))
}, [])




    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US&page=${count}`)
      .then(res=>res.json())
      .then(json=>setData(json))
  }, [count])
return <MoviesContext.Provider value={{data, count, setCount, search, setSearch, popular1, popular2, popular3}}>
    {children}
</MoviesContext.Provider>
}
export function useMoviesContext(){
   return useContext(MoviesContext)
}