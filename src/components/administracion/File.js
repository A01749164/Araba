// Autor: Jose Luis
import { useState } from 'react';
import { PictureAsPdf } from '@mui/icons-material'
import '../../styles/File.css'

const File = (props) => {
    const [descargando, setDescargando] = useState(false);
    const [descargandoTexto, setDescargandoTexto] = useState("Descargar");

    const iniciarDescarga = () => {
        if(descargando === false){
        setDescargando(true);
        setDescargandoTexto("Cancelar");}
        else{
            setDescargando(false);
            setDescargandoTexto("Descargar");
        }
      }
    return (
        <div>
        <PictureAsPdf className='icono'/>
        <p className='nombre'>{props.nom}</p>
        <p className='tamaño'>{props.tam}</p>
        <p className='descargar' onClick={iniciarDescarga}>{descargandoTexto}</p>
        </div>
    )
  }
  
  export default File