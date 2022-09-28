import ArrowsNav from "../ArrowsNav/ArrowsNav";
import {
  faPaintBrush,
  faGears,
  faFaceLaughWink,
} from "@fortawesome/free-solid-svg-icons";
import bg1 from "../../Assets/4.svg";
import bg2 from "../../Assets/3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Technologies.scss";
import { useEffect, useState } from "react";

const Technologies = ({ status, viewSys, setExiting }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    <section className="Technologies">
      <img
        src={bg1}
        alt="Background"
        style={{ transform: "rotate(180deg)", top: 0, left: 0 }}
      />
      <img src={bg2} alt="Background" id={"Background__Technologies--middle"} />
      <ArrowsNav
        dir={"prev"}
        sectionName={"Portfolio"}
        viewSys={viewSys}
        setExiting={setExiting}
      />
      <div className="Technologies__Stacks">
        <article className="Technologies__Stack">
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
        </article>
        <article className="Technologies__Stack">
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
        </article>
        <article className="Technologies__Stack">
          <header>
            <div>
              <FontAwesomeIcon icon={faFaceLaughWink} />
            </div>
            <h2>Otros</h2>
            <p>
              Aquí tambien pongo las otras tecnologias con las que sé trabajar,
              no todo va a ser FrontEnd o BackEnd
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
        </article>
      </div>
      <ArrowsNav
        dir={"next"}
        sectionName={"Contacto"}
        viewSys={viewSys}
        setExiting={setExiting}
      />
      <img src={bg1} alt="Background" />
    </section>
  );
};

export default Technologies;
