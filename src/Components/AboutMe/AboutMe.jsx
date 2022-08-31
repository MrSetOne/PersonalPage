import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.scss";
import aboutMeBG from "../../Assets/4.svg";
import ArrowsNav from "../ArrowsNav/ArrowsNav";

const AboutMe = ({ status, viewSys, setExiting }) => {
  console.log(status);

  return (
    <motion.section
      className="AboutMe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <ArrowsNav
        dir={"prev"}
        sectionName={"Inicio"}
        viewSys={viewSys}
        setExiting={setExiting}
      />
      <div className="aboutMe__img">
        {/* AQUI IRÁ LA FOTO, USALO PARA MAQUETAR */}
      </div>
      <div className="AboutMe__Text">
        <h2>Sobre mi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum et
          ducimus, a reiciendis eius expedita dolorum. Deleniti, officia
          voluptatum nam expedita in id non odit, optio incidunt sint vero.
          Quisquam atque temporibus a nihil officia praesentium totam fugiat
          quas dicta ipsam, dignissimos culpa neque sed vero debitis dolorem.
        </p>
      </div>
      <motion.img
        src={aboutMeBG}
        alt="aboutmeBG"
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.7, delay: 0.2 },
        }}
      />
      <ArrowsNav
        dir={"next"}
        sectionName={"Portfolio"}
        viewSys={viewSys}
        setExiting={setExiting}
      />
    </motion.section>
  );
};

export default AboutMe;
