//AUTOR Omar Talvera
import { useState } from "react";
import Modal from "./Modal";

const UseModal = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button className={"boton-ng " +
        (props.color === "gris" ? "gris " : "")} onClick={() => setModalOpen(true)}>
        {props.nombreBoton}
      </button>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen}>
          <div>{props.children}</div>
        </Modal>
      )}
    </div>
  );
};

export default UseModal;
/*
Para usar este componete la sintaxis es la siguiente:

      <UseModal nombreBoton="Nombre de boton...">          <---Dentro de los parentesis escribe el texto q tendra el boton
        Incerta tu mierda de componente!!                  <---Cambia el texto por lo que sea que quieras desplegar
      </UseModal>
    </div>


*/