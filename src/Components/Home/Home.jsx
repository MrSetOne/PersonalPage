import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Scroll from "react-scroll";
import "./Home.scss";
import img1 from "../../Assets/1.svg";
import img2 from "../../Assets/2.svg";
import img3 from "../../Assets/3.svg";
import astro from "../../Assets/astrokid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Home = ({ setScrolleable, scrolleable }) => {
  const scroller = Scroll.scroller;

  const init = () => {
    setScrolleable(true);
    scroller.scrollTo("aboutMe", { smooth: true });
  };

  return (
    <section className="Home">
      <motion.div
        className="Home__info"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <h1>Michael Lara</h1>
        <h2>FullStack Developer</h2>
        <motion.img
          src={astro}
          initial={{ x: 60, opacity: 0, zIndex: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        />
      </motion.div>
      <motion.img
        src={img1}
        className="Home__Deco Home__Deco--tl"
        initial={{ opacity: 0, rotate: 20, y: -50, x: -30 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      />
      <motion.img
        src={img3}
        className="Home__Deco Home__Deco--tr"
        initial={{ opacity: 0, rotate: 5, y: -50, x: 80 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      />
      <motion.img
        src={img1}
        className="Home__Deco Home__Deco--br"
        initial={{ opacity: 0, rotate: 20, y: 50, x: 30 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      />
      <motion.img
        src={img2}
        className="Home__Deco Home__Deco--bl"
        initial={{ opacity: 0, rotate: 5, y: 50, x: -80 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      />
      <AnimatePresence>
        {!scrolleable && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            exit={{ opacity: 0 }}
            onClick={() => init()}
          >
            <motion.div
              className="Home__Arrow"
              key="arrowDown"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FontAwesomeIcon icon={faAnglesDown} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
