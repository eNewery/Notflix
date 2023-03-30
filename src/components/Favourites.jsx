import { useMoviesContext } from "./MoviesState"
import React, { useContext, useEffect } from 'react';
import FavouriteItem from "./FavouriteItem";

const Favourites = () => {
    const context = useMoviesContext()
    function getAllKeysFromLocalStorage() {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
          keys.push(localStorage.key(i));
        }
        return keys;
      }
      
    function getAllDataFromLocalStorageAndSetState(setFavouriteData) {
        const keys = getAllKeysFromLocalStorage();
        const data = {};
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          data[key] = JSON.parse(localStorage.getItem(key));
          console.log(data)
        }
        context.setFavouriteData(data);
      }
      
  
  useEffect(() => {
    getAllDataFromLocalStorageAndSetState()
  }, []);
  return (
    <div>

    </div>
  );
};

export default Favourites;