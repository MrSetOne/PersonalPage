import React, { useState } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import navInfo from "./NavContainer.json";
import NavItem from "./NavItem/NavItem";

const NavBar = ({ setView, setExiting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState(true);

  const clickr = () => {
    if (first) {
      setFirst(false);
    }
    setIsOpen(!isOpen);
  };

  const variants = {
    open: {
      borderRadius: "5px",
      height: "22.7rem",
      width: "18rem",
      scale: 1,
      opacity: 1,
    },
    close: {
      borderRadius: "50%",
      width: 50,
      height: 50,
      transition: {
        delay: first ? 1.5 : 0.25,
        type: "spring",
        damping: first ? 8 : 13,
      },
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <motion.nav
      variants={variants}
      initial={{ scale: 0.1, opacity: 0 }}
      animate={isOpen ? "open" : "close"}
      className="NavBar"
    >
      <motion.button
        className="NavBarSwitch"
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 315 : 0 }}
        onClick={() => clickr()}
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
            setExiting={setExiting}
          />
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
