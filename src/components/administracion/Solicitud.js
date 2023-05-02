import "../styles/Solicitud.css";

const Solicitud = (props) => {
  return <div className="solicitud">
    <span className="dot"></span>
    <b className="solicitud-nombre">{props.nombre}</b>
    <b className="solicitud-correo">{props.correo}</b>
    <b className="solicitud-fecha">{props.fecha}</b>
    <button className="solicitud-boton">Ver</button>
  </div>;
};

export default Solicitud;
