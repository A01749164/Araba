// Autor: Jose Luis
import '../../styles/FileAttachment.css'
import File from './File'

const FileAttachment = (props) => {

    return (
        <div className='contenedor'>
        <h1 className='titulo'>File Attachment</h1>
        <div className='files'>
        <File 
        nom = {props.nombre}
        tam = {props.tamano}/>
        <File 
        nom = {props.nombre}
        tam = {props.tamano}/>
        <File 
        nom = {props.nombre}
        tam = {props.tamano}/>
        </div>
        </div>
    )
  }
  
  export default FileAttachment