import React from "react";
import "./NavBar.scss";

const NavBar = ({ viewSys }) => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <button
            style={{ fontWeight: viewSys.view === "Inicio" ? 700 : 400 }}
            onClick={() => viewSys.setView("Inicio")}
          >
            Inicio
          </button>
        </li>
        <li>
          <button
            style={{ fontWeight: viewSys.view === "Sobre mi" ? 700 : 400 }}
            onClick={() => viewSys.setView("Sobre mi")}
          >
            Sobre mi
          </button>
        </li>
        <li>
          <button
            style={{ fontWeight: viewSys.view === "Portfolio" ? 700 : 400 }}
            onClick={() => viewSys.setView("Portfolio")}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            style={{ fontWeight: viewSys.view === "Contacto" ? 700 : 400 }}
            onClick={() => viewSys.setView("Contacto")}
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
