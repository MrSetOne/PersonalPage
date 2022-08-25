import React, { useState } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import navInfo from "./NavContainer.json";
import NavItem from "./NavItem/NavItem";

const NavBar = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { borderRadius: "5px", height: "22.7rem", width: "18rem" },
    close: {
      borderRadius: "50%",
      width: 50,
      height: 50,
      transition: { delay: 0.25 },
    },
  };

  return (
    <motion.nav
      variants={variants}
      initial={"close"}
      animate={isOpen ? "open" : "close"}
      className="NavBar"
    >
      <motion.button
        className="NavBarSwitch"
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 315 : 0 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        +
      </motion.button>
      <ul>
        {navInfo.map((item, i) => (
          <NavItem
            setView={setView}
            data={item}
            i={i}
            visible={isOpen}
            setVisible={setIsOpen}
          />
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
