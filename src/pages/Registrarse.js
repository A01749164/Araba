import "../styles/Registrarse.css";
import FormGroup from "../components/FormGroup";
import FormSelect from "../components/FormSelect";

const Registrarse = (props) => {
  // PENDIENTE: Guardar datos ingresados para pasarlos a la BD
  const siguientePag = () => {
    // PENDIENTE: Cambiar de página
  };

  const getValue = (nuevoInput) => {
    // PENDIENTE: guardar datos ingresados
  };

  return (
    <div className="registrarse">
      <div className="tarjeta">
        <form className="needs-validation" onSubmit={siguientePag} noValidate>
          <h3 className="texto-registro">Ingresa tus datos</h3>
          <FormGroup
            id="nombres"
            type="text"
            label="Nombre(s)"
            onChange={getValue}
          />
          <FormGroup
            id="apellidos"
            type="text"
            label="Apellidos"
            onChange={getValue}
          />
          <FormGroup
            id="email"
            type="email"
            label="Correo"
            onChange={getValue}
          />
          <FormGroup
            id="contraseña"
            type="password"
            label="Contraseña"
            onChange={getValue}
          />
          <FormGroup
            id="fecha"
            type="date"
            label="Fecha de nacimiento"
            onChange={getValue}
          />
          <FormGroup
            id="telefono"
            type="tel"
            label="Teléfono"
            onChange={getValue}
          />
          <FormSelect
            id="genero"
            label="Género"
            disabledValue="Elige uno..."
            op1="Masculino"
            op2="Femenino"
            op3="No-binario"
            op4="Prefiero no decir"
          />
          <input className="boton" type="submit" value="SIGUIENTE" />
        </form>
      </div>
    </div>
  );
};

export default Registrarse;
