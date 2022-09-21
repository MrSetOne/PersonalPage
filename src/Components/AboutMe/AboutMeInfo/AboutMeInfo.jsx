import React from "react";
import { motion } from "framer-motion";
import me from "../../../Assets/me.png";
import "./AboutMeInfo.scss";
import Typewriter from "typewriter-effect";

const AboutMeInfo = () => {
  const getAge = (dateString) => {
    let today = new Date();
    let dateOfBirth = new Date(dateString);
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    let monthlyDifference = today.getMonth() - dateOfBirth.getMonth();
    if (
      monthlyDifference < 0 ||
      (monthlyDifference === 0 && today.getDate() < dateOfBirth.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <motion.div
      className="AboutMeInfo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
      <header className="AboutMeInfo__header">
        <motion.img
          src={me}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
        />
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, transition: { delay: 1.2 }, opacity: 1 }}
        >
          Michael Lara Sánchez
        </motion.h2>
      </header>
      <motion.div className="AboutMe__Code__container">
        <Typewriter
          options={{
            delay: 25,
            skipAddStyles: true,
            wrapperClassName: "AboutMe__Code",
            cursorClassName: "AboutMe__Code--Cursor",
          }}
          onInit={(typewriter) => {
            setTimeout(() => {
              typewriter
                .typeString(
                  `<span><span class='AboutMe__Code--declaration'>const</span><span class='AboutMe__Code--constname'> me</span><span class='AboutMe__Code--declaration'> = </span><span class='About_Me__Code--Clousures'>{</span></span><br>`
                )
                .typeString(
                  `<span><span class='AboutMe__Code--attribute'>status</span>: '<span class='AboutMe__Code--string'>openToWork</span>',</span><br>`
                )
                .typeString(
                  `<span><span class='AboutMe__Code--attribute'>basedIn</span>: '<span class='AboutMe__Code--string'>Valencia</span>',</span><br>`
                )
                .typeString(
                  `<span><span class='AboutMe__Code--attribute'>age</span>: <span class='AboutMe__Code--number'>${getAge(
                    "1994-01-18"
                  )}</span>,</span><br>`
                )
                .typeString(
                  `<span><span class='AboutMe__Code--attribute'>hobbies</span>: <span class='AboutMe__Code--array'>[</span></span><br>`
                )
                .typeString(
                  `<span class='AboutMe__Code--ArrayData'>'<span class='AboutMe__Code--string'>technology</span>',</span><br>`
                )
                .typeString(
                  `<span class='AboutMe__Code--ArrayData'>'<span class='AboutMe__Code--string'>photography</span>',</span><br>`
                )
                .typeString(
                  `<span class='AboutMe__Code--ArrayData'>'<span class='AboutMe__Code--string'>videogames</span>',</span><br>`
                )
                .typeString(
                  `<span class='AboutMe__Code--ArrayData'>'<span class='AboutMe__Code--string'>movies</span>',</span><br>`
                )
                .typeString(
                  `<span class='AboutMe__Code--ArrayData'>'<span class='AboutMe__Code--string'>art</span>',</span><br>`
                )
                .typeString(
                  `<span class='AboutMe__Code--arrayClose'>]</span><br>`
                )
                .typeString(
                  `<span class='About_Me__Code--Clousures'>}</span><span>;</span>`
                )
                .start();
            }, 1400);
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutMeInfo;
