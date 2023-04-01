import React from 'react';
import ModalContent from './ModalContent';
import { useMoviesContext } from './MoviesState';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
const context = useMoviesContext();


console.log(context.modalData)
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        {context.modalData.length > 0 ? context.modalData.map(item => (
            <div><ModalContent data={item}/></div>
        )) : <p>Los datos no se han enviado correctamente</p>}
        <button className='closeModal' onClick={handleClose}>X</button>
      </section>
    </div>
  );
};

export default Modal;
