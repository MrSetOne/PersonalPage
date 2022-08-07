import React from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";

const NavBar = ({ viewSys }) => {
  return (
    <nav className="NavBar">
      <ul>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            style={{ fontWeight: viewSys.view === "Inicio" ? 700 : 400 }}
            onClick={() => viewSys.setView("Inicio")}
          >
            Inicio
          </button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <button
            style={{ fontWeight: viewSys.view === "Sobre mi" ? 700 : 400 }}
            onClick={() => viewSys.setView("Sobre mi")}
          >
            Sobre mi
          </button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            style={{ fontWeight: viewSys.view === "Portfolio" ? 700 : 400 }}
            onClick={() => viewSys.setView("Portfolio")}
          >
            Portfolio
          </button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <button
            style={{ fontWeight: viewSys.view === "Contacto" ? 700 : 400 }}
            onClick={() => viewSys.setView("Contacto")}
          >
            Contacto
          </button>
        </motion.li>
      </ul>
    </nav>
  );
};

export default NavBar;
