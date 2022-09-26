import PorfolioItem from "./PorfolioItem/PorfolioItem";
import ArrowsNav from "../ArrowsNav/ArrowsNav";
import data from "./Portfolio.json";
import bg1 from "../../Assets/1.svg";
import bg2 from "../../Assets/2.svg";
import bg3 from "../../Assets/3.svg";
import "./Portfolio.scss";
import { motion, AnimatePresence } from "framer-motion";

const Porfolio = ({ status, viewSys, setExiting }) => {
  const transitions = {
    left: {
      initial: { opacity: 0, x: -100 },
      inView: { opacity: 0.75, x: 0, transition: { duration: 1 } },
      exit: { opacity: 0, x: -100, transition: { duration: 1 } },
    },
    right: {
      initial: { opacity: 0, x: 100 },
      inView: { opacity: 0.75, x: 0, transition: { duration: 1 } },
      exit: { opacity: 0, x: 100, transition: { duration: 1 } },
    },
  };

  return (
    <AnimatePresence>
      {!status && (
        <section className="Porfolio">
          <ArrowsNav
            dir={"prev"}
            sectionName={"Sobre mi"}
            viewSys={viewSys}
            setExiting={setExiting}
          />
          <motion.div className="Porfolio__Items">
            {data.map((item, i) => (
              <PorfolioItem item={item} i={i} status={status} />
            ))}
          </motion.div>
          <ArrowsNav
            dir={"next"}
            sectionName={"Tecnologias"}
            viewSys={viewSys}
            setExiting={setExiting}
          />
          <div className="Porfolio__bg">
            <motion.img
              variants={transitions.left}
              initial={"initial"}
              viewport={{ once: true }}
              whileInView={"inView"}
              exit={"exit"}
              src={bg1}
              alt="Background"
            />
            <motion.img
              variants={transitions.right}
              initial={"initial"}
              viewport={{ once: true }}
              whileInView={"inView"}
              exit={"exit"}
              src={bg1}
              alt="Background"
            />
            <motion.img
              variants={transitions.left}
              initial={"initial"}
              viewport={{ once: true }}
              whileInView={"inView"}
              exit={"exit"}
              src={bg2}
              alt="Background"
            />
            <motion.img
              variants={transitions.right}
              initial={"initial"}
              viewport={{ once: true }}
              whileInView={"inView"}
              exit={"exit"}
              src={bg3}
              alt="Background"
            />
            <motion.img
              variants={transitions.left}
              initial={"initial"}
              viewport={{ once: true }}
              whileInView={"inView"}
              exit={"exit"}
              src={bg1}
              alt="Background"
            />
          </div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default Porfolio;
