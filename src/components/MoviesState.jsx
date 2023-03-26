import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MoviesContext = createContext();
export default function MoviesState({children}){
const [datos, setDatos] = useState(["London", "Argelia", "Arabia"])
return <MoviesContext.Provider value={{datos}}>
    {children}
</MoviesContext.Provider>
}
export function useMoviesContext(){
   return useContext(MoviesContext)
}