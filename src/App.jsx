import React from 'react';
import './App.css';
import {useMoviesContext} from "./components/MoviesState"
import LandingPage from './components/LandingPage';
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
