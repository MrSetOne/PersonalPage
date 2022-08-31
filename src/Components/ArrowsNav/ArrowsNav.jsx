import React from "react";

const ArrowsNav = ({ dir, viewSys, setExiting }) => {
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
    <button className="ArrowsNav" onClick={() => navigate(dir)}>
      {dir}
    </button>
  );
};

export default ArrowsNav;
