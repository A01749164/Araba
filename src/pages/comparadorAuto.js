//Autores: Sandra Ximena Tellez Olvera y Jeovani Hernandez Bastida

import React from "react";
import Navbar from "../components/templates/Navbar";
import car from "../images/nissan.jpg";
import "../styles/DistribucionAuto.css";
import BotonBlanco from "../components/visualizacion/BotonBlanco";
import { GoLocation } from "react-icons/go"
import { SiSpeedtest } from "react-icons/si"
import { BsCalendarDate } from "react-icons/bs"
import BotonAzul2 from "../components/visualizacion/BotonAzul2";

const comparadorAuto = () => {
  return (
    <div>
      <Navbar />
      <div className="distribuidor">
        <div>
          <img
            src={car}
            width="400px"
            style={{ display: "block", margin: "auto" }}
            alt="Carro1 a comparar"
          />
          <div>
            <h3>Nissan GT-R 2022</h3>
            <h4><GoLocation/>  Volkswagen Azcapotzalco</h4>
          </div>
          <div>
            <BotonAzul2 texto="Asientos" />
            <BotonBlanco texto="Piel" />
          </div>
          <div>
            <BotonAzul2 texto="Rines" />
            <BotonBlanco texto="Aluminio" />
          </div>
          <div>
            <BotonAzul2 texto="Pasajeros" />
            <BotonBlanco texto="4 personas max" />
          </div>
          <div>
            <BotonAzul2 texto="Precio" />
            <BotonBlanco texto="$2,500,000.00" />
          </div>
          <div>
            <h5><SiSpeedtest/> Km: 65,230 <BsCalendarDate/> Año: 2020</h5>
          </div>
        </div>

        <div className="auto">
        <img
            src={car}
            width="400px"
            style={{ display: "block", margin: "auto" }}
            alt="Carro1 a comparar"
          />
          <div>
            <h3>Nissan GT-R 2022</h3>
            <h4><GoLocation/>  Volkswagen Azcapotzalco</h4>
          </div>
          
          <div>
            <BotonAzul2 texto="Asientos" />
            <BotonBlanco texto="Piel" />
          </div>
          <div>
            <BotonAzul2 texto="Rines" />
            <BotonBlanco texto="Aluminio" />
          </div>
          <div>
            <BotonAzul2 texto="Pasajeros" />
            <BotonBlanco texto="4 personas max" />
          </div>
          <div>
            <BotonAzul2 texto="Precio" />
            <BotonBlanco texto="$2,500,000.00" />
          </div>
          <div>
            <h5><SiSpeedtest/> Km: 65,230 <BsCalendarDate/> Año: 2020</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default comparadorAuto;
