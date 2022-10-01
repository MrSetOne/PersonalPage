import ArrowsNav from "../ArrowsNav/ArrowsNav";
import {
  faPaintBrush,
  faGears,
  faFaceLaughWink,
} from "@fortawesome/free-solid-svg-icons";
import bg1 from "../../Assets/4.svg";
import bg2 from "../../Assets/3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Technologies.scss";

const Technologies = ({ status, viewSys, setExiting }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [firstView, setFirstView] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstView(false);
    }, 1200);
  }, []);

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = screenWidth <= 750;

  const variants = {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: firstView ? { duration: 1, delay: 0.2 } : { duration: 0.5 },
    },
    exitXL: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.7 },
    },
    exitSRight: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.7 },
    },
    exitSLeft: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.7 },
    },
  };

  return (
    <AnimatePresence>
      {!status && (
        <section className="Technologies">
          <motion.img
            id="Background__Technologies--top"
            initial={{ y: -50, opacity: 0, rotate: 180 }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 180,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            exit={{
              y: -50,
              opacity: 0,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            src={bg1}
            alt="Background"
          />
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            exit={{
              x: 50,
              opacity: 0,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            src={bg2}
            alt="Background"
            id={"Background__Technologies--middle"}
          />
          <ArrowsNav
            dir={"prev"}
            sectionName={"Portfolio"}
            viewSys={viewSys}
            setExiting={setExiting}
          />
          <motion.div
            className="Technologies__Stacks"
            variants={!isMobile && variants}
            initial={!isMobile && "initial"}
            animate={!isMobile && "animate"}
            exit={!isMobile && "exitXL"}
          >
            <motion.article
              className="Technologies__Stack"
              variants={isMobile && variants}
              initial={isMobile && "initial"}
              whileInView={isMobile && "animate"}
              viewport={{ once: true }}
              exit={isMobile && "exitSRight"}
            >
              <header>
                <div>
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <h2>
                  Front<span>End</span>
                </h2>
                <p>
                  Sin dudas, mi lado preferido y el que más disfruto, me es
                  tremendamente sadisfactorio el manejo de estados junto a una
                  estetica limpia.
                </p>
              </header>
              <div className="Technologies__List">
                <h3>Tecnologias:</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>React-Context</li>
                  <li>React-Redux</li>
                  <li>AntDesign</li>
                  <li>Framer-Motion</li>
                </ul>
              </div>
            </motion.article>
            <motion.article
              className="Technologies__Stack"
              variants={isMobile && variants}
              initial={isMobile && "initial"}
              whileInView={isMobile && "animate"}
              viewport={{ once: true }}
              exit={isMobile && "exitSLeft"}
            >
              <header>
                <div>
                  <FontAwesomeIcon icon={faGears} />
                </div>

                <h2>
                  Back<span>End</span>
                </h2>
                <p>
                  Que no se vea, no significa que no exista, lo mejor de saber
                  trabajar con él es que nunca se te escapa nada de tu frontal,
                  puedo controlar todos los datos.
                </p>
              </header>
              <div className="Technologies__List">
                <h3>Tecnologias:</h3>
                <ul>
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>JsonWebToken</li>
                  <li>MySQL</li>
                  <li>Sequelize</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Multer</li>
                  <li></li>
                </ul>
              </div>
            </motion.article>
            <motion.article
              className="Technologies__Stack"
              variants={isMobile && variants}
              initial={isMobile && "initial"}
              whileInView={isMobile && "animate"}
              viewport={{ once: true }}
              exit={isMobile && "exitSRight"}
            >
              <header>
                <div>
                  <FontAwesomeIcon icon={faFaceLaughWink} />
                </div>
                <h2>Otros</h2>
                <p>
                  Aquí tambien pongo las otras tecnologias con las que sé
                  trabajar, no todo va a ser FrontEnd o BackEnd
                </p>
              </header>
              <div className="Technologies__List">
                <h3>Cloud:</h3>
                <ul>
                  <li>Heroku</li>
                  <li>Vercel</li>
                  <li>AWS</li>
                  <li>Mongo Atlas</li>
                </ul>
              </div>
              <div className="Technologies__List">
                <h3>Control de versiones:</h3>
                <ul>
                  <li>Git y GitHub</li>
                </ul>
              </div>
              <div className="Technologies__List">
                <h3>Coordinacion:</h3>
                <ul>
                  <li>Jira</li>
                  <li>Notion</li>
                </ul>
              </div>
              <div className="Technologies__List">
                <h3>Sistemas operativos:</h3>
                <ul>
                  <li>Windows</li>
                  <li>MacOS</li>
                  <li>Ubuntu</li>
                </ul>
              </div>
            </motion.article>
          </motion.div>
          <ArrowsNav
            dir={"next"}
            sectionName={"Contacto"}
            viewSys={viewSys}
            setExiting={setExiting}
          />
          <motion.img
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            exit={{
              y: 50,
              opacity: 0,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            src={bg1}
            alt="Background"
          />
        </section>
      )}
    </AnimatePresence>
  );
};

export default Technologies;
