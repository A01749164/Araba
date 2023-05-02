//Autores: Sandra Ximena Tellez Olvera y Jeovani Hernandez Bastida

import logoARABA from "../images/logoARABA.png";
import car from "../images/nissan.jpg";
import "../styles/DistribucionAuto.css";
import Navbar from "../components/templates/Navbar";
import UseModal from "../components/visualizacion/UseModal";
import TCoche from "../components/templates/TCoche";
import BotonBlanco from "../components/visualizacion/BotonBlanco";
import BotonAzul2 from "../components/visualizacion/BotonAzul2";
import BotonNG from "../components/templates/BotonNG";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import Popup from "../components/visualizacion/Popup";

const vistaAuto = () => {
  return (
    <div>
      <Navbar />
      <div className="distribuidor">
        <div>
          <div>
            <BotonBlanco texto="Interior" />
            <BotonBlanco texto="Exterior" />
          </div>
          <img
            src={car}
            width="400px"
            style={{ display: "block", margin: "auto" }}
            alt="Imagenes de los carros"
          />
          <div>
            <h3>Nissan GT-R 2022</h3>
          </div>

          <div>
            <h5> Color </h5>
            <h5> Naranja </h5>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "60px",
            }}
          >
            <UseModal color="gris" nombreBoton="Detalles Técnicos">
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h6>MOTOR</h6>
                  <BotonBlanco texto="No sé" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h6>CABALLOS DE FUERZA</h6>
                  <BotonBlanco texto="No sé" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h6>CONSUMO DE COMBUSTIBLE </h6>
                  <BotonBlanco texto="No sé" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h6>TRANSMISIÓN</h6>
                  <BotonBlanco texto="No sé" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h6>TRACCIÓN</h6>
                  <BotonBlanco texto="No sé" />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h6>RINES</h6>
                  <BotonBlanco texto="No sé" />
                </div>
              </div>
            </UseModal>
            <UseModal color="gris" nombreBoton="Equipamiento Extra">Aquí va algo jeje</UseModal>
          </div>
        </div>

        <div className="auto">
          <img src={logoARABA} width="200px" alt="Logo de mi aplicación" />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Popup
              buttonText="Precio Total"
              content={
                <p>
                  <BotonBlanco texto="Precio del auto" />
                  <BotonBlanco texto="" />
                </p>
              }
            
              close="Cerrar" 
              />
            
            <UseModal nombreBoton="Plan de financiamiento">
              Aqui van los planes de financiamiento
            </UseModal>
            <div></div>
          </div>
          <h6>
            <AiOutlineExclamationCircle /> El costo inicial puede variar entre
            ciudades
          </h6>
          <hr
            style={{
              height: "2px",
              width: "75%",
              borderWidth: "0",
              borderBottomWidth: "4px",
              borderStyle: "solid",
              color: "black",
              margin: "auto",
            }}
          />
          <div>
            <BotonBlanco texto="Total:" />
            <BotonBlanco />
          </div>
          <div>
            <UseModal color="gris" nombreBoton="Comparar">
              <div className="distribuidor">
                <h6>
                  <AiOutlineSearch /> Selecciona otro auto
                </h6>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <TCoche
                  tarjeta={{
                    image: car,
                    titulo: "Quackity",
                    descripcion: "Roier",
                    precio: "Rivers",
                  }}
                />
                <TCoche
                  tarjeta={{
                    image: car,
                    titulo: "Quackity",
                    descripcion: "Roier",
                    precio: "Rivers",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  marginTop: "20px",
                }}
              >
                <Link to="/comparadorAuto">
                  <BotonNG className="gris" texto="Comparar" />
                </Link>
              </div>
            </UseModal>
          </div>
          <div>
            <BotonNG className="gris" texto="Prueba" />
          </div>
          <div>
            <BotonNG  texto="Comprar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default vistaAuto;
