import PorfolioItem from "./PorfolioItem/PorfolioItem";
import ArrowsNav from "../ArrowsNav/ArrowsNav";
import data from "./Portfolio.json";
import bg1 from "../../Assets/1.svg";
import bg2 from "../../Assets/2.svg";
import bg3 from "../../Assets/3.svg";
import bg4 from "../../Assets/4.svg";
import "./Portfolio.scss";

const Porfolio = ({ status, viewSys, setExiting }) => {
  return (
    <section className="Porfolio">
      <ArrowsNav
        dir={"prev"}
        sectionName={"Sobre mi"}
        viewSys={viewSys}
        setExiting={setExiting}
      />
      <div className="Porfolio__Items">
        {data.map((item, i) => (
          <PorfolioItem item={item} i={i} />
        ))}
      </div>
      <ArrowsNav
        dir={"next"}
        sectionName={"Tecnologias"}
        viewSys={viewSys}
        setExiting={setExiting}
      />
      <div className="Porfolio__bg">
        <img src={bg1} alt="Background" />
        <img src={bg1} alt="Background" />
        <img src={bg2} alt="Background" />
        <img src={bg3} alt="Background" />
        <img src={bg1} alt="Background" />
      </div>
    </section>
  );
};

export default Porfolio;
