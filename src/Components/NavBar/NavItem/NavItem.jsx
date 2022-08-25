import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./NavItem.scss";

const NavItem = ({ data, i, visible, setVisible, setView, setExiting }) => {
  const travel = () => {
    setVisible(false);
    setExiting(true);
    setTimeout(() => {
      setView(i);
      setExiting(false);
    }, 1300);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: i / 6 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          exit={{ opacity: 0, x: 25, y: -10, transition: { duration: 0.2 } }}
          className="NavItem"
          onClick={() => travel()}
        >
          {data.name}
        </motion.li>
      )}
    </AnimatePresence>
  );
};

export default NavItem;
