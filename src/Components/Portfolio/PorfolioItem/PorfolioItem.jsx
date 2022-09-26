import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import "./PorfolioItem.scss";
import visitVLC from "../../../Assets/visit-vlc.jpg";
import gameQuiz from "../../../Assets/Quiz.jpg";
import cantastik from "../../../Assets/cantastik.jpg";
import survivor from "../../../Assets/Survivor.jpg";
import { motion } from "framer-motion";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const PorfolioItem = ({ item, i, status }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const allImgs = [visitVLC, cantastik, gameQuiz, survivor];

  const transitions = {
    initial: {
      opacity: 0,
      y: screenWidth <= 666 ? 100 : 0,
      x: screenWidth <= 666 ? 0 : i % 2 === 0 ? 100 : -100,
    },
    inView: { opacity: 1, y: 0, x: 0 },
    exit: {
      opacity: 0,
      y: screenWidth <= 666 ? 100 : 0,
      x: screenWidth <= 666 ? 0 : i % 2 === 0 ? 100 : -100,
      transition: { duration: 1 },
    },
  };

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <motion.article
      variants={transitions}
      initial={"initial"}
      whileInView={"inView"}
      exit={"exit"}
      viewport={{ once: true }}
      className="PorfolioItem"
      style={{
        flexDirection:
          screenWidth <= 666 ? "column" : i % 2 === 0 ? "row-reverse" : "row",
      }}
    >
      <img src={allImgs[i]} alt={item.name} className="PorfolioItem__Image" />

      <div className="PorfolioItem__Info">
        <div className="PorfolioItem__Title">
          <h2>{item.name}</h2>
          <h3>{item.subtitle}</h3>
        </div>
        <p className="PorfolioItem__Desc">{item.description}</p>
        <div className="PorfolioItem__Links">
          <button>
            <a href={item.links.github} target="blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </button>
          {item.links.page && (
            <button>
              <a href={item.links.page} target="blank">
                <FontAwesomeIcon icon={faGlobe} />
                <span>Visitar</span>
              </a>
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default PorfolioItem;
