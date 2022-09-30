import React, { useState } from "react";
import cv from "../../Assets/CV_Michael_Lara.pdf";
import { sendForm } from "@emailjs/browser";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import bg from "../../Assets/4.svg";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const Contact = ({ status, viewSys, setExiting }) => {
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
    <AnimatePresence>
      {!status && (
        <section className="Contact">
          <motion.div
            className="Contact__Card"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.3 },
            }}
            exit={{
              y: 100,
              opacity: 0,
              transition: { duration: 0.6, delay: 0.3 },
            }}
          >
            <motion.header
              initial={{ opacity: 0, y: 50 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.9, duration: 0.3 },
              }}
            >
              <h2>¡Hablemos!</h2>
              <p>
                Actualmente estoy en busqueda activa de mi primera oportunidad
                como desarrollador frontEnd o FullStack. Si buscas a alguien con
                mi perfil no dudes en contactarme a través de este formulario.
                !Estaré encantado de escuchar tu oferta!
              </p>
            </motion.header>
            <motion.form
              onSubmit={(e) => sendMail(e)}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.9, duration: 0.3 },
              }}
            >
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
                rows={8}
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
            </motion.form>
            <div className="Contact__More">
              <motion.header
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1.5, duration: 0.3 },
                }}
              >
                <div></div>
                <h3>Tambien puedes contarcarme en</h3>
                <div></div>
              </motion.header>
            </div>
            <ul>
              <li>
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.7, duration: 0.3 },
                  }}
                  target={"_blank"}
                  rel="noreferrer"
                  href="mailto: lara.sanchez.michael@gmail.com"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.8, duration: 0.3 },
                  }}
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/michaellaras/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  Linkedin
                </motion.a>
              </li>
              <li>
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.9, duration: 0.3 },
                  }}
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/MrSetOne"
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                  Github
                </motion.a>
              </li>
            </ul>
          </motion.div>
          <motion.img
            initial={{ y: -50, opacity: 0, rotate: "180deg" }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.7 },
            }}
            exit={{
              y: -50,
              opacity: 0,
              transition: { duration: 0.7 },
            }}
            src={bg}
            alt="background"
          />
        </section>
      )}
    </AnimatePresence>
  );
};

export default Contact;
