import PorfolioItem from "./PorfolioItem/PorfolioItem";
import data from "./Portfolio.json";
import "./Portfolio.scss";

const Porfolio = () => {
  return (
    <section className="Porfolio">
      {data.map((item) => (
        <PorfolioItem item={item} />
      ))}
    </section>
  );
};

export default Porfolio;
