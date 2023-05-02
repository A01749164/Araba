//Autor Diego Balderas
import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import "../styles/tableN.css";

function Table({ rows, deleteRow, editRow}) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Funcionalidad</th>
            <th>Costo (arabacoins)</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText = row.estado.charAt(0).toUpperCase() + row.estado.slice(1);


            return (
              <tr key={idx}>
                <td>{row.funcionalidad}</td>
                <td>{row.costo}</td>
                <td>
                  <span className={`label label-${row.estado}`}>{statusText}</span>
                </td>
                <td>
                  <span className="actions">
                    <BsFillPencilFill className="edit-btn" onClick={() => editRow(idx)}/>
                    <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)} />
                  </span>
                </td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;
