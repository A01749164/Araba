// Autor: Aleny
import "../../styles/BotonAzul.css";

const BotonAzul = (props) => {
  return (
    <button
      id={props.id}
      type={props.type ? props.type : "button"}
      className={
        props.className ? `boton-azul ${props.className}` : "boton-azul"
      }
      onClick={props.onClick}
    >
      {props.texto}
    </button>
  );
};

export default BotonAzul;
