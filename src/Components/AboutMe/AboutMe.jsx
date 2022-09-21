import { AnimatePresence, motion } from "framer-motion";
import "./AboutMe.scss";
import aboutMeBG from "../../Assets/4.svg";
import ArrowsNav from "../ArrowsNav/ArrowsNav";
import AboutMeInfo from "./AboutMeInfo/AboutMeInfo";

const AboutMe = ({ status, viewSys, setExiting }) => {
  return (
    <AnimatePresence>
      {!status && (
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
          <motion.div
            className="AboutMe__Container"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            exit={{ opacity: 0, scale: 0.1, transition: { duration: 0.5 } }}
          >
            <AboutMeInfo />
          </motion.div>
          <motion.img
            src={aboutMeBG}
            alt="aboutmeBG"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.5 },
            }}
          />
          <ArrowsNav
            dir={"next"}
            sectionName={"Portfolio"}
            viewSys={viewSys}
            setExiting={setExiting}
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default AboutMe;
