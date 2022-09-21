import { motion } from "framer-motion";
import "./ArrowsNav.scss";
import arrowImg from "../../Assets/arrow.svg";

const ArrowsNav = ({ dir, viewSys, setExiting, sectionName }) => {
  const navigate = (dir) => {
    setExiting(true);
    if (dir === "next") {
      setTimeout(() => {
        viewSys.setView(viewSys.view + 1);
        setExiting(false);
      }, 1300);
    } else if (dir === "prev") {
      setTimeout(() => {
        viewSys.setView(viewSys.view - 1);
        setExiting(false);
      }, 1300);
    }
  };

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: dir === "next" ? -50 : 50,
        x: dir === "next" ? -50 : 50,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
      exit={{
        opacity: 0,
        y: dir === "next" ? 30 : -30,
        x: dir === "next" ? 30 : -30,
        transition: { duration: 0.8 },
      }}
      className={
        dir === "next"
          ? "ArrowsNav ArrowsNav--next"
          : "ArrowsNav ArrowsNav--prev"
      }
      onClick={() => navigate(dir)}
    >
      <h2>{sectionName}</h2>
      <img src={arrowImg} alt="arrow" />
    </motion.button>
  );
};

export default ArrowsNav;
