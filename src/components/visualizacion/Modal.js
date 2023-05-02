//AUTOR Omar Talvera
import "../../styles/Modal.css";

function Modal({ setOpenModal ,children}) {
  return (
    <div className="modal-overlay">
      <div className="modal-contenedor">
        {children}
        <button className="btn btn-outline-dark btn-outline border-0 position-absolute top-0 end-0"
            onClick={() => {
              setOpenModal(false);
            }}
          >X</button>

        </div>
      </div>
  );
}

export default Modal;
  
