import React from 'react';
import './App.css';
import {useMoviesContext} from "./components/MoviesState"
import LandingPage from './components/LandingPage';
import Modal from './components/Modal';
function App() {

const handleClose = () => context.setShowModal(false);
const context = useMoviesContext();


  return (
  <div>
    <Modal className="modalContainer" show={context.showModal} handleClose={handleClose}>
      </Modal>
  <LandingPage/>

    </div>

  );
}

export default App;
