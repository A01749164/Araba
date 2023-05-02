// Autora: Sandra Ximena Tellez Olvera
import React, { useState } from 'react';
import BotonNG from '../templates/BotonNG';

function Popup(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <BotonNG className = "gris" texto={props.buttonText} onClick={() => setIsOpen(true)}>
        {props.buttonText}
      </BotonNG>
      
  
      {isOpen && (
        <div>
          <div>{props.content}</div>
          <BotonNG className = "gris" texto ={props.close} onClick={() => setIsOpen(false)}>
            {props.close}</BotonNG>
        </div>
      )}
    </div>
  );
}

export default Popup;

