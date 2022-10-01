import React, { useState } from "react";
import cv from "../../Assets/CV_Michael_Lara.pdf";
import { sendForm } from "@emailjs/browser";
import "./Contact.scss";
import validator from "validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import bg1 from "../../Assets/1.svg";
import bg2 from "../../Assets/2.svg";
import ArrowNav from "../ArrowsNav/ArrowsNav";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const Contact = ({ status, viewSys, setExiting }) => {
  const [submiteable, setSubmiteable] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
    if (
      data.email &&
      data.message &&
      data.name &&
      validator.isEmail(data.email)
    ) {
      setSubmiteable(true);
    } else {
      setSubmiteable(false);
    }
  };

  console.log();

  const sendMail = async (e) => {
    e.preventDefault();
    // await sendForm(serviceID, templateID, e.target, publicKey);
    setSubmited(true);
  };

  return (
    <AnimatePresence>
      {!status && (
        <section className="Contact">
          <ArrowNav
            dir={"prev"}
            sectionName={"Tecnologia"}
            viewSys={viewSys}
            setExiting={setExiting}
          />
          <motion.div
            className="Contact__Card"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.6 },
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
              {submited && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="Contact__Sended"
                >
                  <motion.div
                    initial={{ scale: 0.1, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: { delay: 0.4 },
                    }}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </motion.div>
                  <motion.div
                    className="Contact__Sended--Deco"
                    initial={{ width: 0 }}
                    animate={{ width: "8rem", transition: { delay: 0.1 } }}
                  />
                  <motion.div
                    className="Contact__Sended--Text"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.6, duration: 0.7 },
                    }}
                  >
                    <h3>¡Mensaje mandado con exito!</h3>
                    <p>Te contestaré con la mayor brevedad posible :)</p>
                  </motion.div>
                </motion.div>
              )}
              <motion.div animate={{ gap: submited && 0 }}>
                <motion.a
                  initial={{ backgroundColor: "#ffffff00", color: "#ffffff" }}
                  whileHover={{ backgroundColor: "#ffffff", color: "#0c0024" }}
                  href={cv}
                  download="CV_Michael_Lara"
                >
                  Descargar CV
                </motion.a>
                <motion.button
                  initial={{
                    border: "2px solid #00A982",
                    color: "#00A982",
                    backgroundColor: "#00a98200",
                  }}
                  animate={{
                    opacity: submiteable ? 1 : 0.5,
                    cursor: submiteable ? "pointer" : "not-allowed",
                    width: submited && 0,
                    padding: submited && 0,
                    border: submited && "none",
                  }}
                  whileHover={
                    submiteable &&
                    !submited && {
                      backgroundColor: "#00A982",
                      color: "#ffffff",
                    }
                  }
                  type="submit"
                  disabled={!submiteable}
                >
                  Enviar
                </motion.button>
              </motion.div>
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
                <div />
                <h3>Tambien puedes contarcarme en</h3>
                <div />
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
          <div className="Contact__Background">
            <motion.img
              initial={{ x: -100, opacity: 0, rotate: 180 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.9 } }}
              exit={{ x: -100, opacity: 0, transition: { duration: 0.9 } }}
              src={bg1}
              alt="background"
            />
            <motion.img
              initial={{ x: 100, opacity: 0, rotate: 300 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.9 } }}
              exit={{ x: 100, opacity: 0, transition: { duration: 0.9 } }}
              src={bg2}
              alt="background"
            />
          </div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default Contact;
