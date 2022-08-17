import React, { useState } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  const [decoStyle, setDecoStyle] = useState({
    left: 13,
    height: 35,
    width: 60,
  });

  const setView = (position) => {
    if (position === 1) {
      setDecoStyle({
        left: 13,
        height: 35,
        width: 60,
      });
    }
    if (position === 2) {
      setDecoStyle({
        left: 121,
        height: 35,
        width: 93,
      });
    }
    if (position === 3) {
      setDecoStyle({
        left: 260,
        height: 35,
        width: 86,
      });
    }
    if (position === 4) {
      setDecoStyle({
        left: 394,
        height: 35,
        width: 92,
      });
    }
  };

  return (
    <nav className="NavBar">
      <ul>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => setView(1)}>Inicio</button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <button onClick={() => setView(2)}>Sobre mi</button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button onClick={() => setView(3)}>Portfolio</button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <button onClick={() => setView(4)}>Contacto</button>
        </motion.li>
        <motion.div
          className="NavBar__Deco"
          animate={decoStyle}
          transition={{ duration: 0.3, type: "spring" }}
        />
      </ul>
    </nav>
  );
};

export default NavBar;
