import "../../styles/TCoche.css"
import {MdFavoriteBorder} from 'react-icons/md'

/* En App.js se coloca de esta forma:
      <TCoche
        tarjeta={{
          image: Meche,
          titulo: "Quackity",
          descripcion: "Roier",
          precio: "Rivers"
        }}
      />
*/

const TCoche = (props) => {
  const imagen = props.tarjeta.image;
  return (
    <div className="tarjeta">
        <img className="imagen" src={imagen}></img>
        <h1 className="titulo-coche">{props.tarjeta.titulo}</h1>
        <p className="texto-descriptivo">{props.tarjeta.descripcion}</p>
        <p className="precio">{props.tarjeta.precio}</p>
        <button className="icono"><MdFavoriteBorder className="icono-imagen"/></button>
    </div>
  )
}

export default TCoche
