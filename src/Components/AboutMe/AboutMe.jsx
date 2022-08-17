import React from "react";
import Scroll from "react-scroll";
import "./AboutMe.scss";
import aboutMeBG from "../../Assets/4.svg";

const AboutMe = () => {
  const Element = Scroll.Element;

  return (
    <Element name="aboutMe" className="AboutMe">
      <div className="aboutMe__img">
        {/* AQUI IRÁ LA FOTO, USALO PARA MAQUETAR */}
      </div>
      <div className="AboutMe__Text">
        <h2>Sobre mi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum et
          ducimus, a reiciendis eius expedita dolorum. Deleniti, officia
          voluptatum nam expedita in id non odit, optio incidunt sint vero.
          Quisquam atque temporibus a nihil officia praesentium totam fugiat
          quas dicta ipsam, dignissimos culpa neque sed vero debitis dolorem.
        </p>
      </div>
      <img src={aboutMeBG} alt="aboutmeBG" />
    </Element>
  );
};

export default AboutMe;
