import '../styles/Paginacion.css'

const Paginacion = (props) => {
  return (
    <div>
        <b className='paginacion-circulo-defect'>
            <b className='paginacion-texto'>{props.number}</b>
        </b>
    </div>
  )
}

export default Paginacion
