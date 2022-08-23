import React from "react";

const PorfolioItem = ({ item }) => {
  console.log(item);
  return (
    <article className="PorfolioItem">
      <h1>{item.name}</h1>
      <h2>{item.subtitle}</h2>
      <h3>{item.description}</h3>
      <img src={item.img} alt={item.name} />
    </article>
  );
};

export default PorfolioItem;
