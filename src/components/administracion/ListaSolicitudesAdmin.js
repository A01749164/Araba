import "../styles/ListaSolicitudesAdmin.css";
import Solicitud from "../components/Solicitud.js";
import Paginacion from "./Paginacion";

//En desarollo, version beta

const ListaSolicitudesAdmin = (props) => {
  return (
    <div className="lista-solicitudes">
      <h1 className="lista-solicitudes-titulo">Solicitudes Recibidas</h1>
      <Solicitud nombre="Angel Garcia" correo="angelgarcia@gmnail.com" fecha="01/05/2023" />
      <Solicitud nombre="Pablo Gonzalez" correo="pablogonzalex@gmail.com" fecha="02/05/2023" />
      <Solicitud nombre="Jose Luis Madrigal" correo="joseluismadrigal@gmail.com" fecha="03/05/2023" />
      <div className="lista-solicitudes-paginacion">
        <b className="lista-solicitudes-paginacion-texto"> 1-3 de 100 datos</b>
        <div className="lista-solicitudes-paginacion-paginas">
          <Paginacion number="1" />
          <Paginacion number="2"/>
          <Paginacion number="3"/>
        </div>
      </div>
    </div>
  );
};

export default ListaSolicitudesAdmin;
