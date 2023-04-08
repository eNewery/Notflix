import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MoviesContext = createContext();
export default function MoviesState({children}){
    const [showModal, setShowModal] = useState(false);
const [modalData, setModalData] = useState([]);
    const [data, setData] = useState([])
    const [search, setSearch] = useState([]);
    const [categories, setCategories] = useState([])
    const [categoryTitle, setCategoryTitle] = useState("")
    const [datosFav, setDatosFav] = useState([])
const [count, setCount] = useState(1)

const getFavouritesFromLocalStorage = () => {
    const keys = Object.keys(localStorage).filter(key => !isNaN(key)); // obtiene las keys que son números (id de película)
    const favourites = keys.map(key => JSON.parse(localStorage.getItem(key))); // obtiene los valores correspondientes a cada key
    setDatosFav(...datosFav, favourites); // asigna los valores a favouriteData
  };
  

  useEffect(() => {
      getFavouritesFromLocalStorage()
  }, []);

useEffect(() => {
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US").then(res => res.json()).then(json => setCategories(json))
}, [])

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7214adc4b19c9daf7f6294b411d236d&language=en-US&page=${count}`)
      .then(res=>res.json())
      .then(json=>setData(json))

  }, [count])
return <MoviesContext.Provider value={{data, count, setCount, search, setSearch, categories, datosFav, setDatosFav, showModal, setShowModal, modalData, categoryTitle, setModalData, setCategoryTitle}}>
    {children}
</MoviesContext.Provider>
}
export function useMoviesContext(){
   return useContext(MoviesContext)
}