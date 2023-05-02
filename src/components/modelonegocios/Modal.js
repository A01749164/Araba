//Autor Diego Balderas
import React, { useState } from "react";
import "../styles/modalN.css";

function Modal({ closeModal, onSubmit, defaultValue }) {
  const [formState, setFormState] = useState(defaultValue ||
    {
    funcionalidad: "",
    costo: 0,
    estado: "activo",
  });

  const [errors, setErros] = useState("")

  const validateForm = () =>{
    if(formState.funcionalidad && formState.costo && formState.estado){
        setErros("")
        return true
    } else {
        let errorFields = [];
        for(const [key, value] of Object.entries(formState)){
            if(!value){
                errorFields.push(key)
            }
        }
        setErros(errorFields.join(", "));
        return false
    }
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  }

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="funcionalidad">Funcionalidad</label>
            <input name="funcionalidad" onChange={handleChange} value={formState.funcionalidad} />
          </div>
          <div className="form-group">
            <label htmlFor="costo">Costo</label>
            <input type="number" name="costo" onChange={handleChange} value={formState.costo} />
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <select
              name="estado"
              value={formState.estado}
              onChange={handleChange}
            >
              <option value="activo">Activo</option>
              <option value="espera">Espera</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && <div className="error">{`Por favor agregue: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Subir
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
