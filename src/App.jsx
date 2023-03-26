import React, {useState, useEffect} from 'react';
import './App.css';
import {useMoviesContext} from "./components/MoviesState"
import MoviesState from './components/MoviesState';
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/550?api_key=d7214adc4b19c9daf7f6294b411d236d')
    .then(res=>res.json())
    .then(json=>setData(json))
}, [])
const context = useMoviesContext();
console.log(context)

  return (
<div></div>
  );
}

export default App;
