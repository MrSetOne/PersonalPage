import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Home.scss";
import img1 from "../../Assets/1.svg";
import img2 from "../../Assets/2.svg";
import img3 from "../../Assets/3.svg";
import astro from "../../Assets/astrokid.png";
import ArrowsNav from "../ArrowsNav/ArrowsNav";

const Home = ({ status, viewSys, setExiting }) => {
  return (
    <AnimatePresence>
      {!status && (
        <motion.section
          className="Home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { delay: 1, duration: 0.3 } }}
        >
          <motion.div
            className="Home__info"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            exit={{
              opacity: 0,
              x: -40,
              transition: { duration: 0.4, delay: 0 },
            }}
          >
            <h1>Michael Lara</h1>
            <h2>FullStack Developer</h2>
            <motion.img
              src={astro}
              initial={{ x: 60, opacity: 0, zIndex: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            />
          </motion.div>
          <motion.img
            src={img1}
            className="Home__Deco Home__Deco--tl"
            initial={{ opacity: 0, rotate: 20, y: -50, x: -30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            exit={{
              opacity: 0,
              rotate: 20,
              y: -50,
              x: -30,
              transition: { delay: 0.3, duration: 0.7 },
            }}
          />
          <motion.img
            src={img3}
            className="Home__Deco Home__Deco--tr"
            initial={{ opacity: 0, rotate: 5, y: -50, x: 80 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            exit={{
              opacity: 0,
              rotate: 5,
              y: -50,
              x: 80,
              transition: { delay: 0.3, duration: 0.7 },
            }}
          />
          <motion.img
            src={img1}
            className="Home__Deco Home__Deco--br"
            initial={{ opacity: 0, rotate: 20, y: 50, x: 30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            exit={{
              opacity: 0,
              rotate: 20,
              y: 50,
              x: 30,
              transition: { delay: 0.3, duration: 0.7 },
            }}
          />
          <motion.img
            src={img2}
            className="Home__Deco Home__Deco--bl"
            initial={{ opacity: 0, rotate: 5, y: 50, x: -80 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            exit={{
              opacity: 0,
              rotate: 5,
              y: 50,
              x: -80,
              transition: { delay: 0.3, duration: 0.7 },
            }}
          />
          <ArrowsNav
            dir={"next"}
            viewSys={viewSys}
            setExiting={setExiting}
            sectionName={"Sobre mi"}
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
