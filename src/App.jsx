import React, {useState, useEffect} from 'react';
import './App.css';
import {useMoviesContext} from "./components/MoviesState"
import MoviesState from './components/MoviesState';
import MoviesContainer from './components/MoviesContainer';
function App() {

const context = useMoviesContext();

  return (
<div>
  <MoviesContainer/>
</div>
  );
}

export default App;
