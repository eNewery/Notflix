import React from 'react';
import './App.css';
import {useMoviesContext} from "./components/MoviesState"
import LandingPage from './components/LandingPage';
import Modal from './components/Modal';
function App() {

const context = useMoviesContext();


  return (
<div>
  <LandingPage/>
  {/* <MoviesContainer/> */}
</div>
  );
}

export default App;
