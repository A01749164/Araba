// Autor: Jeovani Hernandez 
import notificacion from "../../images/notificacion.png";
import compras from "../../images/compras.png"
import perfil from "../../images/perfil.png";
import { Menu } from '@mui/icons-material'
import {  IconButton } from "@mui/material";
import SideBar from "./SideBar";
import React from "react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
            >
            <Menu />
          </IconButton>
          <SideBar handleDrawerToggle = {handleDrawerToggle} mobileOpen = {mobileOpen}/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Panel de Autos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Modelos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Tienda
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="float-end img-thumbnail">
          <a className="navbar-brand" href="#">
            <img src={notificacion} width="40" height="40" />
          </a>
        </div>
        <div className="float-end img-thumbnail">
          <a className="navbar-brand" href="#">
            <img src={compras} width="40" height="40" />
          </a>
        </div>
        <div className="float-end img-thumbnail">
          <a className="navbar-brand" href="#">
            
            <img src={perfil} width = "40" height="40"/>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;