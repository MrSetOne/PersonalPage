import React from "react";
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
    <button
      className={
        dir === "next"
          ? "ArrowsNav ArrowsNav--next"
          : "ArrowsNav ArrowsNav--prev"
      }
      onClick={() => navigate(dir)}
    >
      <h2>{sectionName}</h2>
      <img src={arrowImg} alt="arrow" />
    </button>
  );
};

export default ArrowsNav;
