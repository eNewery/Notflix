import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import MoviesState from './components/MoviesState';
import MoviesContainer from './components/MoviesContainer';
import MovieDetail from './components/MovieDetail';
import CategoryContainer from './components/CategoryContainer';
import Favourites from './components/Favourites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
   <MoviesState>
<Header/>
<Routes>
<Route index element={<App />}/>
<Route path="/Movies" element={<MoviesContainer />}/>
<Route path='/Movies/:id' element={<MovieDetail/>}/>
<Route path='/Category/:name' element={<CategoryContainer/>}/>
<Route path='/Favourites' element={<Favourites/>}/>
  </Routes>  
</MoviesState>
  </BrowserRouter>  
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
