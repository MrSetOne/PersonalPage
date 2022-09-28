import React, { useState } from "react";
import cv from "../../Assets/CV_Michael_Lara.pdf";
import { sendForm } from "@emailjs/browser";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const [submiteable, setSubmiteable] = useState(false);
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
    if (data.email && data.message && data.name) {
      setSubmiteable(true);
    } else {
      setSubmiteable(false);
    }
  };

  const sendMail = async (e) => {
    e.preventDefault();
    // await sendForm(serviceID, templateID, e.target, publicKey).then((res) =>
    //   console.log(res)
    // );
  };

  return (
    <section className="Contact">
      <div className="Contact__Card">
        <header>
          <h2>¡Hablemos!</h2>
          <p>
            Actualmente estoy en busqueda activa de mi primera oportunidad como
            desarrollador frontEnd o FullStack. Si buscas a alguien con mi
            perfil no dudes en contactarme a través de este formulario. !Estaré
            encantado de escuchar tu oferta!
          </p>
        </header>
        <form onSubmit={(e) => sendMail(e)}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Tu nombre"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Tu email"
            onChange={handleInputChange}
          />
          <textarea
            rows={10}
            name="message"
            id="message"
            placeholder="Tu mensaje"
            onChange={handleInputChange}
          ></textarea>
          <div>
            <a href={cv} download="CV_Michael_Lara">
              Descargar CV
            </a>
            <button type="submit" disabled={!submiteable}>
              Enviar
            </button>
          </div>
        </form>
        <div className="Contact__More">
          <header>
            <div></div>
            <h3>Tambien puedes contarcarme en</h3>
            <div></div>
          </header>
        </div>
        <ul>
          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="mailto: lara.sanchez.michael@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/michaellaras/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              Linkedin
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/MrSetOne"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
